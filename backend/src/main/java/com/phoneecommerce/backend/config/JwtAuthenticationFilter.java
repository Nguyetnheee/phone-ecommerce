package com.phoneecommerce.backend.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;

@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String path = request.getServletPath();
        String method = request.getMethod();

        if (isExcludedPath(path, method)) {
            filterChain.doFilter(request, response);
            return;
        }

        String authHeader = request.getHeader("Authorization");

        if(authHeader == null || !authHeader.startsWith("Bearer ")){
            filterChain.doFilter(request,response);
            return;
        }

        String token = authHeader.substring(7);

        if(!jwtService.isTokenValid(token)){
            filterChain.doFilter(request,response);
            return;
        }

        String userId = jwtService.extractSubject(token);

        String role = jwtService.extractRole(token);

        var authorities = List.of(new SimpleGrantedAuthority( "ROLE_"+role));

        var authentication = new UsernamePasswordAuthenticationToken(userId,null,authorities);

        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        FilterChain chain = filterChain;
        chain.doFilter(request,response);
    }

    private boolean isExcludedPath(String path, String method) {
        return "OPTIONS".equalsIgnoreCase(method)
                || path.startsWith("/api/auth/")
                || path.startsWith("/swagger-ui/")
                || "/swagger-ui.html".equals(path)
                || path.startsWith("/v3/api-docs/")
                || (HttpMethod.GET.matches(method) && (path.equals("/api/products") || path.startsWith("/api/products/")));
    }
}

