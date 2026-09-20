export const NAME = 'Ferney Palacio';
export const ALIAS = 'Majunko';
export const GITHUB_USER = 'Majunko';

export const SOCIALS = {
	github: `https://github.com/${GITHUB_USER}`,
	email: {
		local: 'hello.majunko',
		domain: 'pm',
		tld: 'me',
	},
};

export interface Project {
	repo: string;
	title: string;
	description: string;
	tags: string[];
	language: string;
	url: string;
	featured?: boolean;
}

export const featured: Project[] = [
	{
		repo: 'tidal_scrobbler_cli',
		title: 'Tidal Scrobbler CLI',
		description:
			'Node.js CLI that checks whether a track has already been listened to on Tidal, cross-referencing your Last.fm / ListenBrainz scrobble history against the Tidal API — with an interactive OAuth setup wizard.',
		tags: ['Node.js', 'TypeScript', 'CLI', 'OAuth', 'API'],
		language: 'TypeScript',
		url: `https://github.com/${GITHUB_USER}/tidal_scrobbler_cli`,
		featured: true,
	},
	{
		repo: 'brainzscrobble',
		title: 'BrainzScrobble',
		description:
			'Manual scrobbler for ListenBrainz, 100% client-side: send your listens instantly or in batches straight from your browser.',
		tags: ['Svelte', 'ListenBrainz', 'API', 'Scrobbler'],
		language: 'Svelte',
		url: `https://github.com/${GITHUB_USER}/brainzscrobble`,
		featured: true,
	},
	{
		repo: 'lastfm2listenbrainz',
		title: 'lastfm2listenbrainz',
		description:
			'Safe migration of your Last.fm scrobbles to ListenBrainz, with idempotent resume and rate-limit handling.',
		tags: ['Last.fm', 'ListenBrainz', 'Migration', 'API'],
		language: 'JavaScript',
		url: `https://github.com/${GITHUB_USER}/lastfm2listenbrainz`,
	},
];

export const projects = [...featured];

export const skills: string[] = [
	'JavaScript / TypeScript',
	'Python',
	'Node.js',
	'Shell scripting',
	'SQL',
	'PHP',
	'C',
	'REST APIs',
	'Automation',
	'Linux',
	'Git',
];

export const roles: string[] = [
	'a builder of CLI tools',
	'an automation enthusiast',
	'a scraper of the web',
	'a systems tinkerer',
];