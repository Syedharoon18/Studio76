package com.studio76.backend.service;

import com.studio76.backend.model.PhotographyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudioService {

    public List<PhotographyService> getServices() {
        return List.of(
            new PhotographyService(
                1L,
                "Wedding Photography",
                "Capture your big day",
                "/images/wedding.jpg"
            ),
            new PhotographyService(
                2L,
                "Portrait Photography",
                "Professional portraits",
                "/images/portrait.jpg"
            ),
            new PhotographyService(
                3L,
                "Event Photography",
                "Corporate & private events",
                "/images/event.jpg"
            ),
            new PhotographyService(
                4L,
                "Product Photography",
                "Commercial shoots",
                "/images/product.jpg"
            )
        );
    }
}
