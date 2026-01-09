package com.studio76.backend.controller;

import com.studio76.backend.model.Gallery;
import com.studio76.backend.service.GalleryService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/gallery")
@CrossOrigin(origins = "http://localhost:3000")
public class GalleryController {

    private final GalleryService galleryService;

    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    @GetMapping
    public List<Gallery> getAll() {
        return galleryService.getAllPhotos();
    }

    @PostMapping
    public Gallery add(@RequestBody Gallery gallery) {
        return galleryService.addPhoto(gallery);
    }

    @PutMapping("/{id}")
    public Gallery update(@PathVariable Long id, @RequestBody Gallery gallery) {
        return galleryService.updatePhoto(id, gallery);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        galleryService.deletePhoto(id);
    }
}
