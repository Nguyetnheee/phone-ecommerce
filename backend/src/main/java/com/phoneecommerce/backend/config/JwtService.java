package com.phoneecommerce.backend.config;

import com.phoneecommerce.backend.entity.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Date;

@Service
public class JwtService {
    @Value("SF1SwwPXEkJi9tqxm5SvYppTx2bc9kFPmKpvpkfAH7t")
    private String secretkey;

    private Key getSignKey() {
        // HS256 cần key đủ dài (>= 32 bytes). Key bạn đang dài nên OK.
        return Keys.hmacShaKeyFor(secretkey.getBytes(StandardCharsets.UTF_8));
    }

    public String generateToken(User user) {

        return Jwts.builder()
                .setSubject(user.getId().toString())
                .claim("email", user.getEmail())
                .claim("role", user.getRole().name())
                .signWith(getSignKey(), SignatureAlgorithm.HS256)
                .compact();
    }

    public Claims extractClaimsJws(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(getSignKey())
                .build()
                .parseClaimsJws(token).getBody();
    }

    public String extractSubject(String token) {
        return extractClaimsJws(token).getSubject();
    }
    public String extractRole(String token) {
        Object role = extractClaimsJws(token).get("role");
        return role == null ? null : role.toString();
    }

    public String extractUsername(String token) {
        Object username = extractClaimsJws(token).get("username");
        return username == null ? null : username.toString();
    }

    public boolean isTokenValid(String token) {
        try{
            extractClaimsJws(token);
            return true;
        }catch (Exception e){
            return false;
        }
    }




}
