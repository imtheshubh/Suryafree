# Production Deployment Guide

## Prerequisites
- Node.js 18+ installed on your production server
- npm or yarn package manager
- A domain name (optional but recommended)
- SSL certificate (recommended for production)

## Deployment Steps

1. **Transfer Files to Production Server**
   Copy the following files/folders to your production server:
   - `dist/` directory (contains both client and server files)
   - `package.json`
   - `.env.production` (after setting proper environment variables)

2. **Install Dependencies**
   ```bash
   npm install --production
   ```

3. **Set Environment Variables**
   Make sure to set these environment variables in your production environment:
   - NODE_ENV=production
   - PORT=3000 (or your preferred port)
   - DATABASE_URL=your_database_url

4. **Install and Setup PM2** (Recommended for production)
   ```bash
   # Install PM2 globally
   npm install -g pm2

   # Start the application with PM2
   pm2 start dist/index.js --name "suryafree"

   # Setup PM2 to start on system boot
   pm2 startup

   # Save the PM2 process list
   pm2 save
   ```

5. **Setup Nginx** (Recommended for production)
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

6. **SSL Setup** (Recommended)
   - Install Certbot
   - Run: `certbot --nginx -d your-domain.com`

## Monitoring

- Monitor the application using PM2:
  ```bash
  pm2 monit
  pm2 logs suryafree
  ```

## Backup Strategy

1. **Database Backups**
   - Set up regular database backups
   - Store backups in a secure, external location

2. **Application Backups**
   - Keep backups of your application code
   - Document any custom configurations

## Updating the Application

1. Build new version locally:
   ```bash
   npm run build
   ```

2. Transfer new files to production server

3. Restart the application:
   ```bash
   pm2 restart suryafree
   ```

## Rollback Procedure

1. Keep previous version in a backup directory
2. If issues occur, restore previous version:
   ```bash
   # Stop current version
   pm2 stop suryafree

   # Restore backup files
   # Start previous version
   pm2 start suryafree
   ```

## Security Considerations

1. Ensure all environment variables are properly set
2. Use SSL/HTTPS in production
3. Implement rate limiting
4. Regular security updates
5. Monitor for suspicious activities

## Performance Monitoring

1. Use PM2 monitoring
2. Setup application logging
3. Monitor server resources
4. Setup alerts for critical issues