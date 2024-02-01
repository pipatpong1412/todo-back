** env_guide **

PORT=

JWT_KEY=

** api_service **

method  path            params      body

POST    /auth/register  none        {username, password, confirmPassword, email}
POST    /auth/login     none        {username, password}
PUT     /todo :id       :id         {title, duedate}


Notes

MVC (Model, route+Controller, View)