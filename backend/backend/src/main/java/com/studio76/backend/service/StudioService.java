package com.studio76.backend.service;

import com.studio76.backend.model.PhotographyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudioService {

    public List<PhotographyService> getServices() {
        return List.of(
            new PhotographyService("Wedding Photography", "Capture your big day"),
            new PhotographyService("Portrait Photography", "Professional portraits"),
            new PhotographyService("Event Coverage", "Corporate & private events"),
            new PhotographyService("Product Photography", "Commercial shoots")
        );
    }
}
