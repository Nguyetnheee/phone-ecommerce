package com.phoneecommerce.backend.config;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            .csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> auth
                .requestMatchers("/api/health").permitAll()
                .requestMatchers(SecurityConfig::isPublicProductReadRequest).permitAll()
                .anyRequest().authenticated()
            );

        return http.build();
    }

    private static boolean isPublicProductReadRequest(HttpServletRequest request) {
        String path = request.getServletPath();

        return HttpMethod.GET.matches(request.getMethod())
                && (path.equals("/api/products") || path.startsWith("/api/products/"));
    }
}
