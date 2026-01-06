package com.studio76.backend.model;

public class Booking {

    private String name;
    private String email;
    private String phone;
    private String service;
    private String date;

    // getters & setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhone() {
        return phone;
    }
    
    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getService() {
        return service;
    }
    
    public void setService(String service) {
        this.service = service;
    }

    public String getDate() {
        return date;
    }
    
    public void setDate(String date) {
        this.date = date;
    }
}
