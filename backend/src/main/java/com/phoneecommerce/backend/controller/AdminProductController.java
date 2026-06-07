package com.phoneecommerce.backend.controller;

import com.phoneecommerce.backend.dto.request.UpdateOrderStatusRequest;
import com.phoneecommerce.backend.dto.response.ProductResponse;
import com.phoneecommerce.backend.dto.request.ProductRequest;
import com.phoneecommerce.backend.entity.Product;
import com.phoneecommerce.backend.enums.OrderStatus;
import com.phoneecommerce.backend.service.AdminProductService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/products")
@RequiredArgsConstructor
public class AdminProductController {
    @Autowired
    AdminProductService adminProductService;

    @PostMapping
    public ResponseEntity<ProductResponse> createProduct(
            @Valid @RequestBody ProductRequest request) {
        ProductResponse productResponse = adminProductService.createProduct(request);
        return ResponseEntity.ok(productResponse);
    }

    @PutMapping("/update-product")
    public ResponseEntity<ProductResponse> updateProduct(
            @Valid @RequestBody ProductRequest request,@RequestParam Long id) {
        ProductResponse productResponse = adminProductService.updateProduct(request,id);
        return ResponseEntity.ok(productResponse);
    }

    @DeleteMapping("/delete")
    public ResponseEntity<String> deleteProduct(@RequestParam Long id) {

        adminProductService.deleteProduct(id);
        return ResponseEntity.ok("Product deleted successfully");


    }

    @PutMapping("/update-status")
    public ResponseEntity<ProductResponse> updateStatus(
            @Valid @RequestBody UpdateOrderStatusRequest newStatus, @RequestParam Long id) {
        ProductResponse productResponse = adminProductService.changeOrderStatus(id,newStatus);
        return ResponseEntity.ok(productResponse);
    }


    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts() {

        return ResponseEntity.ok(
                adminProductService.getAllProduct()
        );
    }
}
