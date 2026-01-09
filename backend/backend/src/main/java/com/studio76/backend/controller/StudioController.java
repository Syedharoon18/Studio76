package com.studio76.backend.controller;

import com.studio76.backend.model.PhotographyService;
import com.studio76.backend.service.StudioService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class StudioController {

    private final StudioService studioService;

    public StudioController(StudioService studioService) {
        this.studioService = studioService;
    }

    @GetMapping("/services")
    public List<PhotographyService> getServices() {
        return studioService.getServices();
    }
}
