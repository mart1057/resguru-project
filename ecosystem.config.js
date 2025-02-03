module.exports = {
  apps: [
    {
      name: "resguru-project",
      script: "npm",
      args: "run serve", // Replace with your actual start script
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
