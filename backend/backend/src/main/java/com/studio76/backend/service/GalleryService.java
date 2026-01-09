package com.studio76.backend.service;

import com.studio76.backend.model.Gallery;
import com.studio76.backend.repository.GalleryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GalleryService {

    private final GalleryRepository galleryRepository;

    public GalleryService(GalleryRepository galleryRepository) {
        this.galleryRepository = galleryRepository;
    }

    public List<Gallery> getAllPhotos() {
        return galleryRepository.findAll();
    }

    public Gallery addPhoto(Gallery gallery) {
        return galleryRepository.save(gallery);
    }

    public Gallery updatePhoto(Long id, Gallery updatedGallery) {
        Gallery gallery = galleryRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Photo not found"));

        gallery.setTitle(updatedGallery.getTitle());
        gallery.setImageUrl(updatedGallery.getImageUrl());
        gallery.setCategory(updatedGallery.getCategory());

        return galleryRepository.save(gallery);
    }

    public void deletePhoto(Long id) {
        galleryRepository.deleteById(id);
    }
}
