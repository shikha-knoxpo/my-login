Hello,

This is a login system which has a complete responsive (mobile and desktop) Login Page, a Registration Page which is again responsive and a simple dashboard page to show the functionality.

Once the user logins, it navigates to the dashboard saving token in local storage. 
Once the user registers, it navigates to the Login page from where the user can log in using the new id and password.
After Logging in the user cant visit login/register pages before logging out.

I have used redux to save the user credentials, even if a new user registers.

There is a folder by the name of util which is having authentication logics.

There is a wrapper component by the name of Authentication which wraps the entire application for the fuctionality of authentication.

Validations are done with react Formik and Yup.

The design system has mui react library. And along with that CSS classes is used by creating style.module.css.
Routing is the by the latest version of react-router.
And I have used react BreakPoint library for the breakpoints and CSS media queries for the same.

To run the application please run-

npm install

npm run start

If any queries, please reach me out I shall present the same completely.
Thanks.
