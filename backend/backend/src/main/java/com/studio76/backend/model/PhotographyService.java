package com.studio76.backend.model;

public class PhotographyService{

    private String title;
    private String description;

    public PhotographyService(String title, String description) {
        this.title = title;
        this.description = description;
    }

    public String getTitle() 
    {
        return title;
    }

    public String getDescription() 
    {
        return description;
    }
}
