# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### The challenge

Users should be able to:
- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![](./design/desktop-completed.jpg)

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->
<!-- - Live Site URL: [Add live site URL here](https://your-live-site-url.com) -->

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- JavaScript

### What I learned
it was a challanging projec css part and the js part also i had some problems with how to calculate the age but after alot of research and teasting i manage to create a function for it.

```js
function calculateAge(day, month, year) {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day); // Month is 0-indexed, so subtract 1
    const ageInMilliseconds = today - birthDate;
    const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000); // Considering leap years

    // Extract years, months, and days
    const years = Math.floor(ageInYears);
    const remainingDays = (ageInYears - years) * 365.25; // Convert remaining years to days
    const months = Math.floor(remainingDays / 30.44); // Average days in a month
    const days = Math.floor(remainingDays % 30.44);

    return { years, months, days };
}
```
## Author

<!-- - Website - [Add your name here](https://www.your-site.com) -->
- Frontend Mentor - [@AliSepar](https://www.frontendmentor.io/profile/AliSepar)

