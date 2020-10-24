package ru.dwhistle.tracker.controller.util;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

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
        if (cookies != null){
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
}
