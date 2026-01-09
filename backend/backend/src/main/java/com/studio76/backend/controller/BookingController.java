package com.studio76.backend.controller;

import com.studio76.backend.model.Booking;
import com.studio76.backend.service.WhatsappService;
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
    public String createBooking(@RequestBody Booking booking) {

        System.out.println("Booking API HIT");
        System.out.println("Name: " + booking.getName());
        System.out.println("Phone: " + booking.getPhone());

        whatsappService.sendBookingNotification(booking);

        return "Booking received & WhatsApp sent";
    }
}
