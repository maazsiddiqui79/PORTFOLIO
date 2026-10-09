import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";

const GITHUB_USERNAME = "maazsiddiqui79";

export default function Github() {

    const [github, setGithub] = useState(null);
    const [extraStats, setExtraStats] = useState({ stars: 0, contributions: 0 });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [currentTheme, setCurrentTheme] = useState("dark");

    useEffect(() => {
        const checkTheme = () => {
            const themeAttr = document.documentElement.getAttribute("data-theme");
            setCurrentTheme(themeAttr === "light" ? "light" : "dark");
        };

        checkTheme();

        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "data-theme") {
                    checkTheme();
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const profileRes = fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
                const reposRes = fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
                const contribRes = fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=all`);

                const [profileResponse, reposResponse, contribResponse] = await Promise.all([profileRes, reposRes, contribRes]);

                if (!profileResponse.ok) throw new Error("Failed to fetch GitHub profile");

                const profileData = await profileResponse.json();
                const reposData = reposResponse.ok ? await reposResponse.json() : [];
                const contribData = contribResponse.ok ? await contribResponse.json() : null;

                setGithub(profileData);

                let totalStars = 0;
                if (Array.isArray(reposData)) {
                    totalStars = reposData.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
                }

                let totalContributions = 0;
                if (contribData && contribData.total) {
                    totalContributions = Object.values(contribData.total).reduce((acc, val) => acc + val, 0);
                }

                setExtraStats({ stars: totalStars, contributions: totalContributions });

            } catch (err) {
                console.error("GitHub API Error:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchGithubData();
    }, []);


    return (

        <section className="section" id="github">

            <div className="container">

                <div className="github-card glass reveal">


                    {/* ==========================================
                        PROFILE HEADER
                    ========================================== */}

                    <div className="github-profile">


                        <div className="github-profile-main">

                            <div className="github-avatar-wrapper">

                                {!loading && github ? (

                                    <img
                                        src={github.avatar_url}
                                        alt={`${github.login} GitHub profile`}
                                        className="github-avatar"
                                    />

                                ) : (

                                    <div className="github-avatar github-avatar-loading">
                                        —
                                    </div>

                                )}

                            </div>


                            <div className="github-profile-info">

                                <div className="section-label">
                                    09 / Open Source
                                </div>


                                <h3>
                                    The code is public.
                                </h3>


                                <p>
                                    Explore repositories, experiments,
                                    projects and development activity
                                    directly from my GitHub profile.
                                </p>


                                {!loading && github && (

                                    <div className="github-identity">

                                        <span>
                                            @{github.login}
                                        </span>

                                        {github.name && (
                                            <span>
                                                {github.name}
                                            </span>
                                        )}

                                    </div>

                                )}

                            </div>

                        </div>


                        {/* ==========================================
                            GITHUB BUTTON
                        ========================================== */}

                        <a
                            href="https://github.com/maazsiddiqui79"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary magnetic github-main-button"
                        >
                            View GitHub ↗
                        </a>

                    </div>


                    {/* ==========================================
                        GITHUB STATISTICS
                    ========================================== */}

                    <div className="github-stats">


                        <div className="github-stat">
                            <strong>
                                {loading || error ? "—" : extraStats.contributions.toLocaleString()}
                            </strong>
                            <span>
                                Total Commits
                            </span>
                        </div>

                        <div className="github-stat">
                            <strong>
                                {loading || error ? "—" : extraStats.stars.toLocaleString()}
                            </strong>
                            <span>
                                Total Stars
                            </span>
                        </div>

                        <div className="github-stat">
                            <strong>
                                {loading || error ? "—" : github?.public_repos ?? 0}
                            </strong>
                            <span>
                                Repositories
                            </span>
                        </div>

                        <div className="github-stat">
                            <strong>
                                {loading || error ? "—" : github?.followers ?? 0}
                            </strong>
                            <span>
                                Followers
                            </span>
                        </div>

                    </div>


                    {/* ==========================================
                        CONTRIBUTION SECTION
                    ========================================== */}

                    <div className="github-activity">


                        <div className="github-activity-header">

                            <div>

                                <span className="github-activity-label">
                                    CONTRIBUTION ACTIVITY
                                </span>

                                <h4>
                                    Consistency over time.
                                </h4>

                            </div>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                {!loading && github && (
                                    <select 
                                        className="github-year-select"
                                        value={selectedYear} 
                                        onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                                        style={{
                                            padding: '6px 12px',
                                            borderRadius: '6px',
                                            background: 'var(--bg-soft)',
                                            color: 'var(--text)',
                                            border: '1px solid var(--line)',
                                            fontFamily: 'var(--mono)',
                                            fontSize: '0.7rem',
                                            cursor: 'pointer',
                                            outline: 'none'
                                        }}
                                    >
                                        {Array.from({ length: new Date().getFullYear() - new Date(github.created_at).getFullYear() + 1 }, (_, i) => new Date().getFullYear() - i).map(year => (
                                            <option key={year} value={year}>{year}</option>
                                        ))}
                                    </select>
                                )}

                                <a
                                    href="https://github.com/maazsiddiqui79"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="github-activity-link"
                                >
                                    github.com/maazsiddiqui79 ↗
                                </a>
                            </div>

                        </div>


                        <div className="github-calendar">

                            <GitHubCalendar
                                username={GITHUB_USERNAME}
                                blockSize={12}
                                blockMargin={4}
                                fontSize={11}
                                showWeekdayLabels={true}
                                year={selectedYear}
                                colorScheme={currentTheme}
                            />

                        </div>



                    </div>
                        <div className="github-activity-footer">

                            <span>
                                Daily contribution activity
                            </span>

                            <span>
                                Updated from GitHub
                            </span>

                        </div>

                </div>

            </div>

        </section>

    );
}