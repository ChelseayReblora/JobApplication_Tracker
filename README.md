# Job Application Tracker

A clean, pastel-themed web app for keeping track of job applications. Add applications, update their status as you move through the hiring process, and search or filter everything in one place. Data is saved in your browser, so nothing is lost on refresh.

https://github.com/ChelseayReblora/JobApplication_Tracker 

<img width="647" height="656" alt="Screenshot 2026-11-09 at 5 40 28 PM" src="https://github.com/user-attachments/assets/c57b14ae-5ad6-49c8-9001-b7da257e8cd3" />

## Features

- Add applications with company, job title, date applied, status, posting link, and notes
- Update status at any time: **Applied**, **Interview**, **Offer**, or **Rejected**
- Live status counts at the top of the page
- Search by company or job title
- Filter by status
- Delete applications with a confirmation prompt
- Data persists after refresh using localStorage
- Responsive layout that works on phones and desktops
- Input is escaped to prevent HTML injection

## Built With

- HTML5
- CSS3 (custom properties, flexbox, grid)
- Vanilla JavaScript (no frameworks or libraries)
- Google Fonts (Poppins)

## Getting Started

No installation or build tools needed.

1. Clone the repository
   ```bash
   git clone https://github.com/[your-username]/job-tracker.git
   ```
2. Open the folder in VS Code
3. Right-click `index.html` and choose **Open with Live Server**
   (or just double-click `index.html` to open it in your browser)

## Project Structure

```
job-tracker/
├── index.html    # Page structure and form
├── style.css     # Styling and color palette
├── script.js     # App logic, storage, filtering
└── README.md
```

## Color Palette

| Use        | Color     |
|------------|-----------|
| Background | `#FFDDDD` |
| Text       | `#4A4A4A` |
| Cards      | `#FFF8F8` |
| Accent     | `#D98E8E` |

## What I Learned

- Manipulating the DOM and rendering lists dynamically
- Saving and loading data with localStorage
- Filtering and searching arrays in JavaScript
- Escaping user input to avoid XSS issues
- Using CSS variables for easy theming
- Building a responsive layout without a framework

## Future Improvements

- [ ] Edit existing applications
- [ ] Follow-up date reminders
- [ ] Sort by date or company
- [ ] Export to CSV
- [ ] Kanban board view
- [ ] Dark mode
- [ ] Backend with user accounts

## Author

**CHELSEAY ANNE D. REBLORA**
- GitHub: @ChelseayReblora ((https://github.com/ChelseayReblora))
- LinkedIn: https://www.linkedin.com/in/chelseay-anne-reblora-50914a343/

## License

This project is open source and available under the [MIT License](LICENSE).
