# Rolex Cafe - VPS Deployment Guide

## Subdomain: `rolex-cafe.gemshine.tech`
## Port: `5022`
## Stack: React (Vite) + PM2 + Nginx Reverse Proxy

---

### Step 1: Connect to your VPS via SSH
```bash
ssh username@your_vps_ip
```

---

### Step 2: Install Node.js, PM2, and Nginx (if not already installed)
```bash
# Update packages
sudo apt update && sudo apt upgrade -y

# Install Node.js (v20 LTS recommended)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs nginx certbot python3-certbot-nginx

# Install PM2 globally
sudo npm install -g pm2
```

---

### Step 3: Clone or Pull Project on VPS
```bash
# Navigate to web root
cd /var/www

# Clone repository (or pull latest changes)
sudo git clone https://github.com/gemshineinfotechdevelopment/rolex-cafe.git
sudo chown -R $USER:$USER /var/www/rolex-cafe
cd /var/www/rolex-cafe
```

---

### Step 4: Install Dependencies & Build
```bash
npm install
npm run build
```

---

### Step 5: Start with PM2 using `ecosystem.config.cjs`
```bash
# Start the application on port 5022
pm2 start ecosystem.config.cjs

# Save PM2 process list to auto-start on VPS reboot
pm2 save
pm2 startup
```

To verify the app is running:
```bash
pm2 status
curl http://localhost:5022
```

---

### Step 6: Configure Nginx
```bash
# Copy nginx config file
sudo cp nginx.conf /etc/nginx/sites-available/rolex-cafe.conf

# Enable the site
sudo ln -s /etc/nginx/sites-available/rolex-cafe.conf /etc/nginx/sites-enabled/

# Test Nginx configuration for syntax errors
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

### Step 7: Configure Free SSL Certificate (HTTPS)
Ensure your DNS A-record for `rolex-cafe.gemshine.tech` points to your VPS IP address, then run:

```bash
sudo certbot --nginx -d rolex-cafe.gemshine.tech
```
Select option `2` to automatically redirect all HTTP traffic to HTTPS.

---

### Useful Commands for Maintenance:

```bash
# Check PM2 Logs
pm2 logs rolex-cafe

# Restart App
pm2 restart rolex-cafe

# Update with Latest Code
git pull
npm install
npm run build
pm2 reload rolex-cafe
```
