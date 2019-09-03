package com.generations.qtmeats.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

	@GetMapping("/")
	public String paginaLogin() { return "login.html"; }
	
	@GetMapping("/qtm")
	public String paginaPrincipal() { return "index.html"; }
	
	@GetMapping("/admin")
	public String paginaAdministrador() { return "adminscreen.html"; }
}
