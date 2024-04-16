package controllers;

import ninja.Result;
import ninja.Results;

public class CorsHeaderController {
	public Result allowCors() {
        Result result = Results.ok().json().render("key", "value");
        
        // Set CORS headers
        result.addHeader("Access-Control-Allow-Origin", "http://localhost:4200");
        result.addHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
        result.addHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

        // Set CORS credentials
        result.addHeader("Access-Control-Allow-Credentials", "true");

        return result;
    }
}
