// Curated portfolio of public GitHub projects.
// Both the homepage (featured subset) and /projects read from this list.

export const GITHUB_USER = "JW-Albert";
export const GITHUB_URL = "https://github.com/JW-Albert";

export type ProjectCategory = "daq" | "cloud" | "web" | "tools";

export interface Project {
	name: string;
	repo: string;
	descEn: string;
	descZh: string;
	tags: string[];
	lang?: string;
	stars?: number;
	category: ProjectCategory;
	featured?: boolean;
}

export const categoryMeta: Record<
	ProjectCategory,
	{ en: string; zh: string; emoji: string }
> = {
	daq: { en: "Data Acquisition & PHM", zh: "資料採集與健康預測", emoji: "📡" },
	cloud: { en: "Cloud, IoT & Edge", zh: "雲端、物聯網與邊緣運算", emoji: "☁️" },
	web: { en: "Full-Stack Web Apps", zh: "全端網頁應用", emoji: "🌐" },
	tools: { en: "Tooling & DevOps", zh: "工具與 DevOps", emoji: "🛠️" },
};

// Display order of categories.
export const categoryOrder: ProjectCategory[] = ["daq", "cloud", "web", "tools"];

export const projects: Project[] = [
	// ---- Data Acquisition & PHM ----
	{
		name: "ProWaveDAQ Real-Time Visualization",
		repo: "https://github.com/JW-Albert/ProWaveDAQ-Python-Visualization-Unit",
		descEn:
			"A Python platform that streams vibration data from a PW-RVT (Modbus RTU) sensor and renders live multi-channel charts in the browser — with automatic CSV archiving and optional SQL upload, all driven from a web UI. Built on a five-thread, queue-based architecture with 50:1 downsampling.",
		descZh:
			"以 Python 打造的振動資料採集平台，透過 Modbus RTU 從 PW-RVT 感測器讀取資料，於瀏覽器即時繪製多通道連續曲線，並自動分檔儲存 CSV、選用上傳 SQL，全程透過網頁介面操作。採五執行緒、佇列式架構並以 50:1 降頻優化效能。",
		tags: ["Python", "Flask", "Modbus RTU", "Chart.js", "Multithreading"],
		lang: "Python",
		stars: 1,
		category: "daq",
		featured: true,
	},
	{
		name: "PET-7H24M DAQ Visualization (ARM64)",
		repo: "https://github.com/JW-Albert/ICP-DAS_PET-7H24M_Python-Visualization-Unit",
		descEn:
			"Real-time vibration acquisition from an ICP DAS PET-7H24M over TCP/IP, optimized for ARM64 Linux. Features dynamic channel toggling, live Chart.js plotting, and high-throughput buffered CSV writing.",
		descZh:
			"針對 ARM64 Linux 優化的振動資料採集系統，透過 TCP/IP 從泓格 PET-7H24M 讀取資料，支援動態通道開關、Chart.js 即時繪圖與高效能緩衝式 CSV 寫入。",
		tags: ["Python", "Flask", "TCP/IP", "ARM64", "Chart.js"],
		lang: "Python",
		category: "daq",
	},
	{
		name: "NI-DAQ C++ Acquisition Library",
		repo: "https://github.com/JW-Albert/NiDAQ-C-Package-Unit",
		descEn:
			"A high-performance C++ data-acquisition library for National Instruments hardware, offering a simplified multi-channel API, multithreaded real-time processing, and INI-configured CSV output across Windows and Linux.",
		descZh:
			"為 NI（National Instruments）硬體打造的高效能 C++ 數據採集函式庫，提供簡化的多通道 API、多執行緒即時處理，以及由 INI 設定檔驅動的 CSV 輸出，並跨 Windows 與 Linux。",
		tags: ["C++", "NI-DAQmx", "Multithreading", "Cross-platform"],
		lang: "C++",
		stars: 1,
		category: "daq",
	},
	{
		name: "DAQUtility — Multi-Source DAQ",
		repo: "https://github.com/JW-Albert/DAQ-Utility",
		descEn:
			"A C++ tool that synchronously captures from NI-DAQ and multiple ALSA audio devices at once, organizing recordings into timestamped, labeled CSV files with configurable save intervals.",
		descZh:
			"C++ 開發的多來源同步採集工具，可同時從 NI-DAQ 與多組 ALSA 音訊裝置擷取資料，並依時間戳與標籤組織為 CSV 檔案，儲存間隔可自訂。",
		tags: ["C++", "NI-DAQ", "ALSA", "CSV"],
		lang: "C++",
		category: "daq",
	},

	// ---- Cloud, IoT & Edge ----
	{
		name: "AWS Greengrass NI-DAQ Component",
		repo: "https://github.com/JW-Albert/aws_ggc-daq-NIDAQ-python",
		descEn:
			"A production-grade AWS Greengrass v2 edge component for industrial data acquisition with National Instruments hardware — real-time streaming to the cloud, backed by CI/CD lint/validate/test and release pipelines.",
		descZh:
			"正式環境等級的 AWS Greengrass v2 邊緣元件，搭配 National Instruments 硬體進行工業資料採集，支援即時串流上雲，並具備 CI/CD 檢查、驗證、測試與發佈流程。",
		tags: ["AWS Greengrass v2", "Python", "IoT Edge", "CI/CD"],
		lang: "Python",
		category: "cloud",
		featured: true,
	},
	{
		name: "Home Monitor",
		repo: "https://github.com/JW-Albert/home-monitor",
		descEn:
			"An IoT home-monitoring system built with a Flask backend and a Vue frontend for collecting and visualizing environmental sensor data.",
		descZh:
			"以 Flask 後端搭配 Vue 前端打造的 IoT 居家環境監控系統，用於蒐集並可視化環境感測資料。",
		tags: ["Flask", "Vue", "IoT"],
		category: "cloud",
	},
	{
		name: "Terraform — Nextcloud on AWS",
		repo: "https://github.com/JW-Albert/Terraform-aws-nextCloud",
		descEn:
			"Infrastructure-as-Code that provisions a self-hosted Nextcloud on AWS: an EC2 web tier, S3 object storage, IAM roles, and a user-data bootstrap — fully reproducible through Terraform.",
		descZh:
			"以 Terraform 自動化部署自架 Nextcloud 於 AWS：EC2 網頁層、S3 物件儲存、IAM 角色與開機 user-data 腳本，是完全可重現的基礎設施即程式碼。",
		tags: ["Terraform", "AWS", "EC2", "S3", "IaC"],
		lang: "HCL",
		category: "cloud",
	},

	// ---- Full-Stack Web Apps ----
	{
		name: "Jiu-Pluck — Campus Meetup Platform",
		repo: "https://github.com/JW-Albert/Jiu-Pluck",
		descEn:
			"A social platform for university students to organize private and public meetups, integrating class schedules, calendar sync (Google / Apple CalDAV), and Discord notifications. FastAPI backend, React + TypeScript frontend.",
		descZh:
			"為大學生打造的揪團社交平台，支援私人揪團與公開活動，整合課表、行事曆同步（Google／Apple CalDAV）與 Discord 通知。後端 FastAPI、前端 React + TypeScript。",
		tags: ["FastAPI", "React", "TypeScript", "SQLAlchemy", "JWT"],
		lang: "Python",
		stars: 1,
		category: "web",
		featured: true,
	},
	{
		name: "Split-Wise — Bill Splitter",
		repo: "https://github.com/JW-Albert/Split-Wise",
		descEn:
			"A multi-person expense-splitting app with passwordless email-OTP login, room management, and an automatic two-pointer settlement algorithm. Flask, TailwindCSS, and Alpine.js, with Cloudflare Tunnel support.",
		descZh:
			"多人分帳工具，採用免密碼的 Email OTP 登入、房間管理，並以雙指針配對演算法自動結算。Flask、TailwindCSS、Alpine.js，並支援 Cloudflare Tunnel。",
		tags: ["Flask", "SQLite", "TailwindCSS", "Alpine.js"],
		lang: "Python",
		category: "web",
	},
	{
		name: "Short Link Service",
		repo: "https://github.com/JW-Albert/short-link",
		descEn:
			"A lightweight FastAPI URL shortener with custom slugs, an admin dashboard, visit analytics, and hardening against SQL injection, XSS, CSRF, and rate-abuse.",
		descZh:
			"基於 FastAPI 的輕量短網址服務，支援自訂短碼、管理後台、訪問統計，並具備 SQL Injection、XSS、CSRF 與限流等完整防護。",
		tags: ["FastAPI", "SQLite", "PostgreSQL", "Security"],
		lang: "Python",
		category: "web",
	},
	{
		name: "Smart Stamp SaaS",
		repo: "https://github.com/JW-Albert/Smart-Stamp-SaaS-Solution",
		descEn:
			"A three-tier SaaS for verifiable digital stamps: a read-only signing/verification server, a FastAPI + Vue3 management backend, and a TypeScript client SDK with RS256 signatures.",
		descZh:
			"可驗證數位印章的三層式 SaaS：唯讀的簽章／驗證伺服器、FastAPI + Vue3 管理後台，以及採 RS256 簽章的 TypeScript 客戶端 SDK。",
		tags: ["FastAPI", "Vue3", "TypeScript", "RS256", "SDK"],
		lang: "Python",
		category: "web",
	},

	// ---- Tooling & DevOps ----
	{
		name: "Linux-Setup",
		repo: "https://github.com/JW-Albert/Linux-Setup",
		descEn:
			"A collection of one-shot shell scripts for provisioning Debian/Ubuntu servers: user & sudo setup, hardened SSH, UFW firewall, Docker, Cloudflare Tunnel, and NTP time sync.",
		descZh:
			"一鍵設定 Debian/Ubuntu 伺服器的 Shell 腳本集：使用者與 sudo 設定、SSH 強化、UFW 防火牆、Docker、Cloudflare Tunnel 與 NTP 時間同步。",
		tags: ["Shell", "Debian", "Security", "Docker", "Cloudflare"],
		lang: "Shell",
		stars: 2,
		category: "tools",
		featured: true,
	},
	{
		name: "git-ai-hook",
		repo: "https://github.com/JW-Albert/git-ai-hook",
		descEn:
			"A dependency-free prepare-commit-msg Git hook that uses the Gemini API to draft Conventional-Commits messages from your staged diff — pure Python standard library, install once, use everywhere.",
		descZh:
			"零相依套件的 prepare-commit-msg Git hook，透過 Gemini API 依暫存區 diff 自動生成 Conventional Commits 訊息，僅使用 Python 標準函式庫，安裝一次即全域可用。",
		tags: ["Python", "Git", "Gemini API", "Automation"],
		lang: "Python",
		category: "tools",
	},
];

export const featuredProjects = projects.filter((p) => p.featured);

/** Lower-cased repo name from a GitHub URL, or null for non-GitHub URLs. */
function repoNameFromUrl(url: string): string | null {
	const m = url.match(/github\.com\/[^/]+\/([^/]+)/i);
	return m ? m[1].toLowerCase() : null;
}

let starsCache: Project[] | null = null;

/**
 * The project list with live star counts fetched from GitHub at build time
 * (a single request, memoized per build). Falls back to the hardcoded `stars`
 * on any failure so the page never breaks.
 */
export async function getProjectsWithStars(): Promise<Project[]> {
	if (starsCache) return starsCache;
	try {
		const res = await fetch(
			`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`,
			{
				headers: {
					Accept: "application/vnd.github+json",
					"User-Agent": "prisvalis-site",
				},
			},
		);
		if (!res.ok) throw new Error(`GitHub API ${res.status}`);
		const repos = (await res.json()) as Array<{
			name: string;
			stargazers_count: number;
		}>;
		const stars = new Map(
			repos.map((r) => [r.name.toLowerCase(), r.stargazers_count]),
		);
		starsCache = projects.map((p) => {
			const name = repoNameFromUrl(p.repo);
			const live = name ? stars.get(name) : undefined;
			return live != null ? { ...p, stars: live } : p;
		});
		return starsCache;
	} catch {
		return projects;
	}
}
