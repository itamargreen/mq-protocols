module.exports = [
	{
		path: './mhub-configs/multiusers.conf.json',
		passwords: [{ target: 'admin_password', key: 'admin' },
					{ target: 'referee_password', key: 'ref' },
					{ target: 'scorekeeper_password', key: 'sk' },
					{ target: 'clock_password', key: 'clock' }]
	},
	{
		path: './fllscoring-configs/multiusers.conf.js',
		passwords: [{ target: 'admin_password', key: 'admin' },
					{ target: 'referee_password', key: 'ref' },
					{ target: 'scorekeeper_password', key: 'sk' }]
	},
	{
		path: './clock-configs/multiusers.conf.js',
		passwords: [{ target: 'clock_password', key: 'clock' }]
	}
];