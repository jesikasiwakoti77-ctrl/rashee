// Edit the message inside backticks for each sender.
const letters = [
  { from: "BABA", message: ` 💗🎂 मेरी प्यारी छोरीलाई १६औँ जन्मदिनको धेरै धेरै शुभकामना! 🎂💗

मेरी नानी, तिमी मेरो जीवनको सबैभन्दा सुन्दर उपहार र मेरो मुटुको टुक्रा हौ। 🥹❤️ जीवनमा सधैँ आफ्नो मनको कुरा सुन्नु, आफूलाई माया गर्नु र आफ्नो सपनालाई कहिल्यै नछोड्नु है। तिमी जतिसुकै ठूलो भए पनि, मेरा लागि सधैँ त्यही सानी नानी रहनेछौ। म सधैँ तिम्रो साथमा हुनेछु। 🫂💗

भगवानले तिम्रा सबै सपना पूरा गरून्, तिम्रो जीवन खुसी, माया र सफलताले भरियोस्। सधैँ हाँसिराख्नु, मेरी राजकुमारी! 👑🧿

Happy Sweet 16, my princess! 🎂💋 तिमीलाई धेरै धेरै माया! ❤️🫶🏻` },
  { from: "MAMU", message: `प्रिय छोरी राशी
   🫶मैले नदेखेको संसार तिमीलाई देखाउन चाहन्छु छोरी, मैले पूरा गर्न नसकेको सपना तिम्रो आँखामा पूरा भएको हेर्न चाहन्छु। ❤️
मेरो जीवनमा जति दुःख आए पनि सहन्छु, तर तिम्रो बाटोमा कहिल्यै अभाव र आँसु नआओस्।
तिमी मुस्कुराएको देख्नु नै मेरो सबैभन्दा ठूलो जित हुनेछ, मेरी छोरी।🫶
    जन्मदिनको शुभकामना 🎂🎂❣️` },
  { from: "Shreeyam", message: `💗🎂 HAPPY 16TH BIRTHDAY TO MY BEAUTIFUL BIG SISTER! 🎂💗

Didi, 🥹🫶🏻 you’re not just my sister, you’re my comfort person, my partner in crime, and one of the biggest blessings in my life. I’m so grateful to have you. ❤️🫂

No matter how much we fight or annoy each other, I’ll always love you and be there for you. Never doubt your worth, never stop chasing your dreams, and always remember how special you are. You deserve all the happiness and love in this world. 🎀✨

I hope 16 brings you beautiful memories, genuine friendships, and endless reasons to smile. Keep glowing, my pretty girl! 👑💗

I LOVE YOU TO THE MOON AND BACK, DIDI! 🌙🫶🏻 You’ll always be my forever favorite girl. 💋❤️

Forever your favorite little troublemaker! 🥹🎀` },
{ from: "Buwa/Aama ", message: `मेरी प्यारी नातिनीलाई जन्मदिनको धेरै धेरै शुभकामना! 🎂💗

आज तिमी १६ वर्षकी भयौ। समय कति छिटो बित्दो रहेछ है! तिमीलाई सधैँ खुसी, स्वस्थ र मुस्कुराइरहेको देख्न पाऊँ भन्ने मेरो चाहना छ। जीवनमा जति नै चुनौती आए पनि आफूमा विश्वास राख्नु, आफ्ना सपनाहरू पूरा गर्न मेहनत गर्नु र सधैँ असल मान्छे बन्नु।

तिम्रो जीवन माया, खुसी र सुन्दर अवसरहरूले भरियोस्। तिम्रो हरेक पाइला सफलतातर्फ अघि बढोस्। तिमी मेरो लागि सधैँ विशेष छौ र रहनेछौ।

धेरै धेरै माया र आशीर्वाद, मेरी प्यारी नातिनी। ❤️🎂

जन्मदिनको अनगिन्ती शुभकामना! 💐

तिमीलाई धेरै माया गर्ने,
तिम्रो हजुरबुबा/हजुरआमा ❤️` },
 { from: "Thulobaba/Mamu", message: `My Dearest Daughter Rashi , ❤️🎂

Happy 16th Birthday, my sweetheart! 💗

It feels like just yesterday you were a little girl, and now you’re growing into a beautiful young lady. No matter how old you get, you will always be my little girl and one of the greatest blessings of my life.

May your life be filled with happiness, love, and endless opportunities. Always believe in yourself, follow your dreams, and remember that I will always be here to love, support, and guide you.

You are loved more than words can ever express. Keep smiling, keep shining, and never stop being the wonderful person you are.

Happy Sweet Sixteen, my princess! May all your dreams come true. ❤️🎂

With all my love,
Thulobaba/Thulomamu` },
  { from: "Buwa", message: `🎂🎉 मेरी प्यारी नातिनी राशि शिवाकोटी लाई जन्मदिनको हार्दिक मंगलमय शुभकामना! 🎉🎂

❤️ मेरी प्यारी नातिनी, आज तिम्रो जन्मदिनको यो विशेष अवसरमा तिमीलाई धेरै धेरै माया, आशीर्वाद र उज्ज्वल भविष्यको शुभकामना व्यक्त गर्दछु। तिम्रो जीवन सधैँ हाँसो, खुशी, माया र सफलताले भरिपूर्ण रहोस्। तिमीले जीवनमा देखेका हरेक सपना पूरा गर्न सक र हरेक पाइलामा प्रगति गर्दै अगाडि बढ्न सक।

🙏 भगवानले तिमीलाई सधैँ स्वस्थ, सुखी, दीर्घायु र भाग्यमानी बनाइराखून्। तिम्रो जीवनमा ज्ञान, विवेक र असल संस्कारको विकास होस्। तिमी आफ्ना आमाबुबाको गौरव, परिवारको खुसी र समाजको असल नागरिक बन्न सक। जीवनमा जस्तोसुकै परिस्थिति आए पनि हिम्मत, धैर्य र आत्मविश्वासका साथ अगाडि बढिरहनू।

🌹 हजुरबुवाको माया र आशीर्वाद तिमीमाथि सधैँ रहिरहनेछ। तिम्रो जीवन फूलझैँ सुन्दर, आकाशझैँ विशाल र उज्यालो भविष्यले भरिपूर्ण बनोस् भन्ने कामना गर्दछु।

🎁 जन्मदिनको धेरै धेरै शुभकामना, मेरी प्यारी नातिनी! तिम्रो हरेक दिन विशेष बनोस्, हरेक चाहना पूरा होस् र जीवनभर खुशीका पलहरू प्राप्त भइरहून्। ❤️🎂💐

धेरै माया, शुभकामना र आशीर्वादसहित, तिम्रो हजुरबुवा
भीमबहादुर खड्का 🙏❤️` },
  { from: "Aama", message: `🎂🎉 मेरी प्यारी नातिनी राशि शिवाकोटी लाई जन्मदिनको धेरै धेरै शुभकामना! 🎉🎂

💖 मेरी प्यारी नातिनी, तिम्रो जीवन सधैँ सुख, शान्ति, खुशी र सफलताले भरिपूर्ण रहोस्। तिम्रो मुहारमा सधैँ मिठो मुस्कान छाइरहोस्, तिम्रा हरेक सपना पूरा हुँदै जाऊन् र तिमी जीवनमा असल, ज्ञानी र सफल व्यक्ति बन्न सक।

🙏 भगवानले तिमीलाई सधैँ स्वस्थ, दीर्घायु र सुखी राखून्। तिम्रो जीवनमा कहिल्यै दुःखको छाया नपरोस् र हरेक पाइलामा सफलता मिलिरहोस्। हजुरआमाको माया, आशीर्वाद र शुभकामना सधैँ तिमीसँग रहनेछ। ❤️

🎁 जन्मदिनको अनगिन्ती शुभकामना, मेरी प्यारी नातिनी! तिम्रो जीवन फूलझैँ सुन्दर र जूनझैँ उज्यालो बनोस्। 🌹🎂💐

धेरै धेरै माया र आशीर्वादसहित,
तिम्री प्यारी हजुरआमा
लक्ष्मी खड्का ❤️🙏` },
  { from: "Krishna Mama", message: `🎂 प्यारी भान्जी राशि सिवाकोटी लाई जन्मदिनको धेरै धेरै शुभकामना! ❤️ 🙏 तिम्रो जीवन सधैँ सुख, शान्ति, खुशी र सफलताले भरिपूर्ण रहोस्। 🌹 भगवानले तिम्रा सबै सपना पूरा गरून्, धेरै माया र आशीर्वाद — 
मामा कृष्णबहादुर खड्का ❤️🎉` },
  { from: "Shuvam", message: `🎂 प्यारी दिदि राशि सीवाकोटी लाई जन्मदिनको धेरै धेरै शुभकामना! 🎉❤️ 🌸
     हजुरको जीवन सधैँ खुशी, 
     माया र सफलताले भरिपूर्ण रहोस्। 🙏 
     भगवानले हजुरको सबै सपना पूरा गरून् र सधैँ स्वस्थ र खुसी राखून्। 💖 धेरै माया र शुभकामनासहित, हजुरको भाइ सुभम खड्का 🎁🎂` },
  { from: "subanshi", message: `🎂❤️ प्यारी दिदी राशि शिवाकोटी लाई जन्मदिनको धेरै धेरै शुभकामना! 🎉 🌸 
    हजुरको जीवन सधैँ खुशी, माया र सफलताले भरिपूर्ण रहोस्। 🙏 भगवानले हजुरको सबै सपना पूरा गरून् र सधैँ स्वस्थ राखून्। 💐 हजुरको मुहारमा सधैँ मिठो मुस्कान छाइरहोस् र जीवन सुन्दर बनोस्। 💕 धेरै माया र शुभकामनासहित,  
    बहिनी सुभान्सी खड्का 🎁🎂` },
  { from: "Bimala Maiju", message: `Message
🎂🎉 जन्मदिनको धेरै धेरै शुभकामना मेरी प्यारी भान्जी ❤️💐 
तिम्रो जीवन सधैँ खुसी, माया र सफलताले भरियोस्। 
तिम्रा हरेक सपना पूरा होऊन् र तिम्रो अनुहारको मुस्कान कहिल्यै नहराओस्। भगवानले तिमीलाई सधैँ सुखी, स्वस्थ र भाग्यमानी बनाऊन्। धेरै माया र आशीर्वाद, नानी! 🥰❤️
lots of love frm maiju😘😘😘` },
  { from: "Rebika Didi", message: `Happy 16th Birthday Rashi 🎉🎂
Welcome to your Sweet Sixteen. Seeing you cross this milestone brings back so many memories. Having lived through 30 years of my own life, I’ve seen how quickly time flies and how unpredictable, beautiful, and challenging the world can be.
Life is a mix of good days and bad days, sunshine and storms. Having walked through many ups and downs myself,  there is one piece of advice I want to give you today, it is
Be resilient, 
stay grounded, 
and never lose your inner peace.
As you grow older, you will face moments of confusion, tough choices, and hardships. Don’t let them break your spirit or dim your light. Learn to carry yourself with grace, wisdom, and maturity through every phase. Work hard for your dreams, value true relationships, and always protect your self-respect. Life isn't about having a perfect journey; it's about learning, evolving, and staying strong no matter what comes your way.
Enjoy your teenage years, but keep your eyes on the future. Dream big, stay humble, and remember that no matter what kind of day you are having—good or bad— All the family will always be right here to back you up, guide you, and walk beside you.
May this 16th year shape you into an even wiser, stronger, and more wonderful person.
With all my love, blessings, and wisdom,
Your dear siso Rebika didi.....` },
  { from: "purnima", message: `To my favourite person, my soon-to-be 16-year-old. 🤍
It’s crazy how we got so close in just a few months, 
yet you’ve become such a special part of my life.
 I never expected to find a bond like ours so quickly, 
 but I’m genuinely grateful I did. 
 You deserve all the happiness, love, and beautiful things this world has to offer. 
 I hope 16 brings you endless smiles and unforgettable memories. 
 No matter how recently we became close, you already mean so much to me, 
 and I hope we stay this close for years to come. 
Happy 16th birthday, my girl. ♡` },
  { from: "Apil", message: `Happiest birthday baini ✨,Lots of love to you` },
  { from: "jesika didi", message: `Happy 16th birthday, Rashiiii! 🎂💗🫶

Hami le dherai time sangai spend garna paayeka chainau, tara timilai bhetda bachhai dekhi chinya jasto feel huncha. 🥹❤️

You’ll always be my little baini, no matter what. Yaad rakhnu hai, timro didi is always just a call away. 🫂💗

Aru ko POV le garda afno feelings ignore nagarnu, afno heart ko kura suna, ani always prioritize yourself because you matter the most. ❤️‍🩹

Timi mero lagi ekdam special chau. Sadhai khusi rahanu hai, meri cutieee! Love youuu! 🎀💋❤️` },
  { from: "Myself", message: `Write something for yourself ` },
];