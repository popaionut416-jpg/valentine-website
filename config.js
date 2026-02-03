// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Antonia",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Ti amo tantissimo 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],  // Heart emojis
        bears: ['🧸', '🐻']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Ma iubesti?",                                    // First interaction
            yesBtn: "Da <3",                                             // Text for "Yes" button
            noBtn: "Nu :(",                                               // Text for "No" button
            secretAnswer: "Te ador viata mea!! ❤️"           // Secret hover message
        },
        second: {
            text: "Cat de mult vrei sa ma bati?",                          // For the love meter
            startText: "Atat de mult",                                   // Text before the percentage
            nextBtn: "Simt ca este destul ❤️"                                         // Text for the next button
        },
        third: {
            text: "Vuoi essere la mia Valentina? 🌹", // The big question!
            yesBtn: "Da normal ",                                             // Text for "Yes" button
            noBtn: "Ma mai gandesc :p"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "Bataia este rupta din rai si tu esti ingerasul meu  🤗🥰💝",  // Shows when they go past 5000%
        high: "Eu zic sa nu exageram amore mio 💝",              // Shows when they go past 1000%
        normal: "Doar atat ? 🥰"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Imi doresc sa te fac cea mai fericita femeie din lume 💝💖💝💓",
        message: "Abia astept sa petrec ziua indragostitilor impreuna cu tine amore mio ❤️❤️❤️ ",
        emojis: "❤️❤️❤️❤️❤️"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#F075AE",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#FF8F8F",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.7s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.2         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dszdqbnay/video/upload/v1770150515/Andrea_Bocelli_-_Con_Te_Partir%C3%B2_Time_To_Say_Goodbye_Official_Music_Video_nfmw5e.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
