import Login from '../src/components/Login'

<Login>

if(Authenticated){
  ShowMyPlants(token)
  ShowMyProducts(token)
}

</Login>

<NotLoggedIn>
DisplayError('NOTLOGGEDIN')
DisplayForm('LOGIN')
</NotLoggedIn>

