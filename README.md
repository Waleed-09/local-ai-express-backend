# Local AI-Powered Express.js Backend Bridge

A robust, cloud-free Node.js/Express.js REST API designed to act as a communication bridge with a locally-hosted Large Language Model (LLM) using Ollama. This project demonstrates full-stack backend networking capabilities and local AI model integration.

## 🚀 Key Features
- **100% Offline & Free:** Processes complex AI prompts locally without relying on expensive cloud APIs or internet connectivity.
- **Cross-Device Communication:** Server configured to network globally (`0.0.0.0`), allowing external devices (like mobile phones) to communicate with the local AI over a local area network (LAN).
- **Modern JavaScript:** Implemented using modern ES Modules (`import/export` syntax).

## 🛠️ Tech Stack & Ecosystem
- **Runtime Environment:** Node.js
- **Backend Framework:** Express.js
- **HTTP Client:** Axios (for local endpoint routing)
- **Security Middleware:** CORS (Cross-Origin Resource Sharing enabled)
- **Local LLM Engine:** Ollama running `llama3.2:latest`

## 📊 Architecture & Data Flow
1. **Client Request:** External Client (Postman/Mobile) sends a `POST` request with a text prompt to the Express server.
2. **Backend Routing:** Express captures the payload and forwards it to Ollama's local engine via an HTTP stream bridge.
3. **Local Compiling:** The local hardware (RAM/GPU) processes the model weights using the `llama3.2` architecture.
4. **API Response:** The generated output is sent back to the initial client endpoint with a standard `200 OK` status.

## ⚡ API Endpoint Documentation

### Chat Endpoint
- **URL:** `http://192.168.18.26:5000/api/chat`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`

#### Request Body Example:
```json
{
  "prompt": "Explain the role of an API in one short sentence."
}
