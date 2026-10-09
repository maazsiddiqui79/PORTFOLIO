export default async function handler(req, res) {
    const GITHUB_USERNAME = "maazsiddiqui79";
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        return res.status(500).json({ error: "GitHub token is missing. Please add GITHUB_TOKEN to Vercel environment variables." });
    }

    try {
        const query = `
        {
          user(login: "${GITHUB_USERNAME}") {
            contributionsCollection {
              contributionCalendar {
                totalContributions
                weeks {
                  contributionDays {
                    contributionCount
                    date
                    color
                  }
                }
              }
            }
          }
        }
        `;

        const response = await fetch("https://api.github.com/graphql", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ query }),
        });

        if (!response.ok) {
            throw new Error(`GitHub API responded with status: ${response.status}`);
        }

        const data = await response.json();
        
        // Format the GraphQL data to match the react-github-calendar format
        // The calendar expects: [{ date: "YYYY-MM-DD", count: 0, level: 0 }]
        const calendarData = [];
        let totalContributions = 0;

        const weeks = data.data.user.contributionsCollection.contributionCalendar.weeks;
        
        weeks.forEach(week => {
            week.contributionDays.forEach(day => {
                totalContributions += day.contributionCount;
                
                // Determine level (0-4) based on contribution count
                let level = 0;
                if (day.contributionCount > 0 && day.contributionCount <= 3) level = 1;
                else if (day.contributionCount > 3 && day.contributionCount <= 6) level = 2;
                else if (day.contributionCount > 6 && day.contributionCount <= 10) level = 3;
                else if (day.contributionCount > 10) level = 4;

                calendarData.push({
                    date: day.date,
                    count: day.contributionCount,
                    level: level
                });
            });
        });

        res.status(200).json({ 
            total: totalContributions,
            contributions: calendarData 
        });

    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        res.status(500).json({ error: "Failed to fetch GitHub data" });
    }
}
