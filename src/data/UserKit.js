const ROOT_URL = "https://frebi.willandskill.eu/"

export default class {
  async register(firstName, lastName, email, password, organisationName, organisationKind){
    const url = `${ROOT_URL}auth/users/`
    const payload = {
      firstName, 
      lastName, 
      email, 
      password, 
      organisationName, 
      organisationKind
    }
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async arctivateUser(uid, token){
    const url = `${ROOT_URL}/auth/users/activate/`
    const payload = {uid, token}
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async login(email, password){
    const url = `${ROOT_URL}api-token-auth/`
    const payload = { email, password}
    return fetch(url, {
      method: "POST",
      headers: this.getPublicHeaders(),
      body: JSON.stringify(payload)
    })
  }

  logout(){
    localStorage.removeItem("BUSINESS_TOKEN")
  }

  async getCustomerList() {
    const url = `${ROOT_URL}api/v1/customers`
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    })
  }

  async getClientInfo(){
    const url = `${ROOT_URL}api/v1/me`
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    })
  }

  async getCustomerInfo(id){
    const url = `${ROOT_URL}api/v1/customers/${id}/`
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    })
  }

  async deleteCustomer(id){
    const url = `${ROOT_URL}api/v1/customers/${id}/`
    return fetch( url, {
      method: "DELETE",
      headers: this.getPrivateHeaders()
    })
    
  }

  async addCustomer(name, organisationNr, reference){
    const url = `${ROOT_URL}api/v1/customers`
    const payload = { 
      name,
      organisationNr,
      reference 
    }
    return fetch(url, {
      method: "POST",
      headers: this.getPrivateHeaders(),
      body: JSON.stringify(payload)
    })
  }

  async getUser(){
    const url = `${ROOT_URL}api/v1/clients/`
    return fetch(url, {
      headers: this.getPrivateHeaders(),
    })
  }

  setToken(token) {
    localStorage.setItem("BUSINESS_TOKEN", token)
  }

  getToken() {
    return localStorage.getItem("BUSINESS_TOKEN")
  }

  getPublicHeaders(){
    return {
      "Content-Type": "application/json"
    }
  }

  getPrivateHeaders() {
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${this.getToken()}`
    }
  }

}