** env_guide **

PORT=

JWT_KEY=

** api_service **

method  path             authen       params      body

POST    /auth/register      0         none        {username, password, confirmPassword, email}
POST    /auth/login         1         none        {username, password}
GET     /auth/me            1         none        


Notes

MVC (Model, route+Controller, View)