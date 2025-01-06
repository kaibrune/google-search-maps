# Google Maps Link Injector

A simple Chrome Extension that adds a "Maps" link in the Google Search results page alongside the existing tabs like “All”, “Images”, “News”, etc. It automatically detects your current Google TLD and points the link to the local Google Maps domain.

![image](https://i.imgur.com/T7zdUIU.png)

## Features

- Inserts a “Maps” tab in the Google Search navigation bar.
- Redirects to the local Google Maps domain based on the user’s current Google TLD.
- Lightweight implementation with minimal overhead.

## Installation

1. Clone or download this repository.
2. Open `chrome://extensions` in your Chrome browser.
3. Enable **Developer mode** (toggle on the top right).
4. Click **Load unpacked** and select the folder containing this extension’s files.
5. Open any Google Search page. You should see a new “Maps” tab in the navigation bar.

## Usage

- Navigate to any Google Search page (e.g., `https://www.google.de/search?q=something`).
- Look for the new “Maps” link among the tabs.
- Click it to open the corresponding Maps search for your query.

## Repository Structure

. ├── manifest.json ├── content.js └── README.md

- **manifest.json** – Describes the extension’s permissions and load behavior.
- **content.js** – Inserts the “Maps” link in the Google Search navigation bar.
- **README.md** – This documentation file.

