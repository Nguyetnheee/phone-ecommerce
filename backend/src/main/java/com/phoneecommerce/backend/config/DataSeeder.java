package com.phoneecommerce.backend.config;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.phoneecommerce.backend.entity.Product;
import com.phoneecommerce.backend.repository.ProductRepository;

@Component
public class DataSeeder implements CommandLineRunner {

    private final ProductRepository productRepository;

    public DataSeeder(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public void run(String... args) {
        if (productRepository.count() > 0) {
            return;
        }

        List<Product> demoProducts = List.of(
                Product.builder()
                        .name("iPhone 15 Pro Max")
                        .brand("Apple")
                        .description("Flagship iPhone with A17 Pro chip, titanium design, and advanced camera system.")
                        .price(new BigDecimal("29990000"))
                        .stockQuantity(12)
                        .imageUrl("https://placehold.co/600x600?text=iPhone+15+Pro+Max")
                        .storage("256GB")
                        .ram("8GB")
                        .color("Natural Titanium")
                        .build(),
                Product.builder()
                        .name("iPhone 14")
                        .brand("Apple")
                        .description("Reliable iPhone with strong performance, OLED display, and excellent camera quality.")
                        .price(new BigDecimal("18990000"))
                        .stockQuantity(18)
                        .imageUrl("https://placehold.co/600x600?text=iPhone+14")
                        .storage("128GB")
                        .ram("6GB")
                        .color("Blue")
                        .build(),
                Product.builder()
                        .name("Samsung Galaxy S24 Ultra")
                        .brand("Samsung")
                        .description("Premium Android phone with S Pen support, bright display, and powerful zoom camera.")
                        .price(new BigDecimal("26990000"))
                        .stockQuantity(10)
                        .imageUrl("https://placehold.co/600x600?text=Galaxy+S24+Ultra")
                        .storage("256GB")
                        .ram("12GB")
                        .color("Titanium Gray")
                        .build(),
                Product.builder()
                        .name("Samsung Galaxy A55 5G")
                        .brand("Samsung")
                        .description("Balanced mid-range phone with 5G, smooth display, and long battery life.")
                        .price(new BigDecimal("9990000"))
                        .stockQuantity(24)
                        .imageUrl("https://placehold.co/600x600?text=Galaxy+A55+5G")
                        .storage("256GB")
                        .ram("8GB")
                        .color("Awesome Navy")
                        .build(),
                Product.builder()
                        .name("Xiaomi 14")
                        .brand("Xiaomi")
                        .description("Compact flagship with fast performance, Leica camera tuning, and fast charging.")
                        .price(new BigDecimal("18990000"))
                        .stockQuantity(15)
                        .imageUrl("https://placehold.co/600x600?text=Xiaomi+14")
                        .storage("512GB")
                        .ram("12GB")
                        .color("Black")
                        .build(),
                Product.builder()
                        .name("Xiaomi Redmi Note 13 Pro")
                        .brand("Xiaomi")
                        .description("Value phone with high-resolution camera, AMOLED display, and large battery.")
                        .price(new BigDecimal("7490000"))
                        .stockQuantity(30)
                        .imageUrl("https://placehold.co/600x600?text=Redmi+Note+13+Pro")
                        .storage("256GB")
                        .ram("8GB")
                        .color("Midnight Black")
                        .build(),
                Product.builder()
                        .name("OPPO Reno11 F")
                        .brand("OPPO")
                        .description("Slim phone with stylish design, bright display, and capable portrait camera.")
                        .price(new BigDecimal("8990000"))
                        .stockQuantity(20)
                        .imageUrl("https://placehold.co/600x600?text=OPPO+Reno11+F")
                        .storage("256GB")
                        .ram("8GB")
                        .color("Palm Green")
                        .build(),
                Product.builder()
                        .name("Vivo V30")
                        .brand("Vivo")
                        .description("Modern phone focused on portrait photography, smooth performance, and thin design.")
                        .price(new BigDecimal("11990000"))
                        .stockQuantity(16)
                        .imageUrl("https://placehold.co/600x600?text=Vivo+V30")
                        .storage("256GB")
                        .ram("12GB")
                        .color("Bloom White")
                        .build(),
                Product.builder()
                        .name("Realme 12 Pro Plus")
                        .brand("Realme")
                        .description("Feature-rich phone with periscope portrait camera, large battery, and fast charging.")
                        .price(new BigDecimal("9990000"))
                        .stockQuantity(22)
                        .imageUrl("https://placehold.co/600x600?text=Realme+12+Pro+Plus")
                        .storage("256GB")
                        .ram("8GB")
                        .color("Submarine Blue")
                        .build(),
                Product.builder()
                        .name("Realme C67")
                        .brand("Realme")
                        .description("Affordable phone with dependable battery life, large display, and everyday performance.")
                        .price(new BigDecimal("5490000"))
                        .stockQuantity(35)
                        .imageUrl("https://placehold.co/600x600?text=Realme+C67")
                        .storage("128GB")
                        .ram("8GB")
                        .color("Sunny Oasis")
                        .build()
        );

        productRepository.saveAll(demoProducts);
    }
}
