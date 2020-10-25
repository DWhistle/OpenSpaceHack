package ru.dwhistle.tracker.controller.util;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.Arrays;

@Component
public class UserAuthInterceptor implements HandlerInterceptor {
    @Resource(name = "requestScopeUserData")
    private UserContext userContext;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        Cookie[] cookies = request.getCookies();
        Cookie userCookie = null;
        if (cookies != null) {
            userCookie = Arrays.stream(cookies).filter(c -> c.getName().equals("userId")).findFirst().orElse(null);
        }
        if (userCookie == null) {
            response.getWriter().write("Unauthorized");
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            return false;
        }
        try {
            userContext.id = Integer.parseInt(userCookie.getValue());
        } catch (NumberFormatException | NullPointerException e) {
            response.getWriter().write("Incorrect userId");
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            return false;
        }
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
        response.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS, DELETE, PUT");
        response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Accept, X-Requested-With, remember-me, withCredentials");
    }
}
