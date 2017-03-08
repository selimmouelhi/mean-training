export class NavbarController {
  constructor($auth){
'ngInject';
this.isAuthenticated=$auth.isAuthenticated;
this.$auth=$auth;

  }
logout(){
this.$auth.logout();

}
}
