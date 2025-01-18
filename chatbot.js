class Chatbot {
    constructor() {
        this.responses = {
            greetings: [
                "Hello! Welcome to FaroukandCo Software Engineering. How can I assist you today?",
                "Hi there! I'm here to help you with any questions about our software solutions.",
                "Welcome! I'm FaroukandCo's virtual assistant. What can I do for you?"
            ],
            goodbye: [
                "Thank you for chatting with us! Have a great day!",
                "Goodbye! Feel free to return if you have more questions.",
                "Thanks for your interest in FaroukandCo. Have a wonderful day!"
            ],
            services: {
                general: "We offer custom software development, consulting services, and software maintenance & support. Which would you like to know more about?",
                custom_development: "Our custom software development services include mobile apps, enterprise solutions, and web applications tailored to meet your specific business needs.",
                consulting: "Our expert consultants help businesses assess, plan, and execute their digital transformation strategy to improve systems and software performance.",
                maintenance: "We provide comprehensive software maintenance and support to ensure your systems stay secure, updated, and optimized."
            },
            pricing: {
                general: "Our pricing varies by service. What specific service are you interested in?",
                web_dev: "Web application development starts at NGN 500,000.",
                mobile_dev: "Mobile application development starts at NGN 800,000.",
                enterprise: "Enterprise solutions start at NGN 1,200,000.",
                consulting: "Initial consultation is NGN 50,000. Digital transformation strategy starts at NGN 200,000.",
                maintenance: "Basic support package is NGN 100,000/month, Advanced support is NGN 200,000/month.",
                ui_ux: "UI/UX Design services start at NGN 300,000.",
                api: "API Integration services start at NGN 250,000.",
                ecommerce: "E-commerce solutions start at NGN 600,000.",
                chatbot: "Chatbot development starts at NGN 2,400,000.",
                website: "Website development starts at NGN 400,000."
            },
            consultation: {
                booking: "You can book a consultation through our website. Would you like me to guide you through the process?",
                process: "To book a consultation: 1. Fill out the consultation form on our website 2. Choose your preferred date and time 3. Provide project details 4. We'll confirm your booking via email.",
                availability: "Our consultants are available Monday through Friday, 9 AM to 6 PM WAT."
            },
            contact: {
                general: "You can reach us through email at contact@faroukandco.com or faroukidris131@gmail.com, or call us at +2348141590430.",
                location: "We're located at 123 Innovation Avenue, Gwarimpa, Abuja, Nigeria.",
                hours: "Our support team is available Monday through Friday, 9 AM to 6 PM WAT."
            },
            company: {
                about: "FaroukandCo Software Engineering was founded by Farouk Adamu Idris with the goal of bringing innovative, custom software solutions to businesses of all sizes.",
                mission: "Our mission is to deliver cutting-edge software solutions that drive efficiency and innovation while building long-lasting relationships with our clients.",
                expertise: "We specialize in custom software development, digital transformation, and creating scalable solutions for modern businesses."
            },
            default: "I'm not sure I understand. Could you please rephrase that? You can ask me about our services, pricing, consultation booking, or company details."
        };

        this.keywords = {
            greetings: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
            goodbye: ['bye', 'goodbye', 'see you', 'thank you', 'thanks'],
            services: ['services', 'offer', 'provide', 'development', 'consulting', 'maintenance'],
            pricing: ['price', 'cost', 'pricing', 'rates', 'fee', 'charges', 'how much'],
            consultation: ['consultation', 'book', 'appointment', 'schedule', 'meet'],
            contact: ['contact', 'email', 'phone', 'location', 'address', 'reach'],
            company: ['company', 'about', 'who', 'mission', 'background']
        };
    }

    processInput(input) {
        const lowercaseInput = input.toLowerCase();

        // Check for greetings
        if (this.containsKeywords(lowercaseInput, this.keywords.greetings)) {
            return this.getRandomResponse(this.responses.greetings);
        }

        // Check for goodbyes
        if (this.containsKeywords(lowercaseInput, this.keywords.goodbye)) {
            return this.getRandomResponse(this.responses.goodbye);
        }

        // Check for pricing inquiries
        if (this.containsKeywords(lowercaseInput, this.keywords.pricing)) {
            if (lowercaseInput.includes('web')) {
                return this.responses.pricing.web_dev;
            } else if (lowercaseInput.includes('mobile')) {
                return this.responses.pricing.mobile_dev;
            } else if (lowercaseInput.includes('enterprise')) {
                return this.responses.pricing.enterprise;
            } else if (lowercaseInput.includes('consult')) {
                return this.responses.pricing.consulting;
            } else if (lowercaseInput.includes('maintenance') || lowercaseInput.includes('support')) {
                return this.responses.pricing.maintenance;
            } else if (lowercaseInput.includes('ui') || lowercaseInput.includes('ux') || lowercaseInput.includes('design')) {
                return this.responses.pricing.ui_ux;
            } else if (lowercaseInput.includes('api')) {
                return this.responses.pricing.api;
            } else if (lowercaseInput.includes('ecommerce') || lowercaseInput.includes('e-commerce')) {
                return this.responses.pricing.ecommerce;
            } else if (lowercaseInput.includes('chatbot')) {
                return this.responses.pricing.chatbot;
            } else if (lowercaseInput.includes('website')) {
                return this.responses.pricing.website;
            }
            return this.responses.pricing.general;
        }

        // Check for consultation inquiries
        if (this.containsKeywords(lowercaseInput, this.keywords.consultation)) {
            if (lowercaseInput.includes('process') || lowercaseInput.includes('how')) {
                return this.responses.consultation.process;
            } else if (lowercaseInput.includes('available') || lowercaseInput.includes('time')) {
                return this.responses.consultation.availability;
            }
            return this.responses.consultation.booking;
        }

        // Check for services inquiries
        if (this.containsKeywords(lowercaseInput, this.keywords.services)) {
            if (lowercaseInput.includes('custom') || lowercaseInput.includes('development')) {
                return this.responses.services.custom_development;
            } else if (lowercaseInput.includes('consult')) {
                return this.responses.services.consulting;
            } else if (lowercaseInput.includes('maintenance') || lowercaseInput.includes('support')) {
                return this.responses.services.maintenance;
            }
            return this.responses.services.general;
        }

        // Check for contact inquiries
        if (this.containsKeywords(lowercaseInput, this.keywords.contact)) {
            if (lowercaseInput.includes('location') || lowercaseInput.includes('address')) {
                return this.responses.contact.location;
            } else if (lowercaseInput.includes('hours') || lowercaseInput.includes('time')) {
                return this.responses.contact.hours;
            }
            return this.responses.contact.general;
        }

        // Check for company information
        if (this.containsKeywords(lowercaseInput, this.keywords.company)) {
            if (lowercaseInput.includes('mission')) {
                return this.responses.company.mission;
            } else if (lowercaseInput.includes('expertise') || lowercaseInput.includes('specialize')) {
                return this.responses.company.expertise;
            }
            return this.responses.company.about;
        }

        return this.responses.default;
    }

    containsKeywords(input, keywords) {
        return keywords.some(keyword => input.includes(keyword));
    }

    getRandomResponse(responses) {
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize chatbot and handle interactions
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new Chatbot();
    const chatMessages = document.querySelector('.chat-messages');
    const chatInput = document.querySelector('.chat-input input');
    const chatForm = document.querySelector('.chat-input');
    const chatToggle = document.querySelector('.chat-toggle');
    const chatContainer = document.querySelector('.chat-container');
    const minimizeChat = document.querySelector('.minimize-chat');

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
        chatContainer.classList.toggle('chat-open');
        if (chatContainer.classList.contains('chat-open') && chatMessages.children.length === 0) {
            // Add welcome message
            addMessage('bot', chatbot.getRandomResponse(chatbot.responses.greetings));
        }
    });

    // Minimize chat
    minimizeChat.addEventListener('click', () => {
        chatContainer.classList.remove('chat-open');
    });

    // Handle message submission
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            addMessage('user', message);
            
            // Get and add bot response
            setTimeout(() => {
                const response = chatbot.processInput(message);
                addMessage('bot', response);
            }, 500);

            // Clear input
            chatInput.value = '';
        }
    });

    function addMessage(type, text) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message', `${type}-message`);
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
}); 