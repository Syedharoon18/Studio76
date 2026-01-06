package com.studio76.backend.controller;

import com.studio76.backend.model.Booking;
import com.studio76.backend.service.WhatsappService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/booking")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    private final WhatsappService whatsappService;

    public BookingController(WhatsappService whatsappService) {
        this.whatsappService = whatsappService;
    }

    @PostMapping
    public ResponseEntity<String> createBooking(@RequestBody Booking booking) {

        // 🔥 Debug log (VERY IMPORTANT)
        System.out.println("📥 Booking API HIT");
        System.out.println("Name: " + booking.getName());
        System.out.println("Phone: " + booking.getPhone());

        // Send WhatsApp message
        whatsappService.sendBookingNotification(booking);

        return ResponseEntity.ok("Booking Submitted Successfully");
    }
}
