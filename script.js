document.addEventListener('DOMContentLoaded', () => {
    const chatArea = document.getElementById('chat-area');

    let messages = [
        { text: "שמעתם??? יש דליפת גז מהמפעל בצומת בית דגן.☠☠☠", sender: "אנונימוס 1", delay: 1000 },
        { text: "מה?? איזה גז??? מסוכן לנשום??? למישהו יש מסכת אב\"כ?😱😷😱", sender: "אנונימוס 3", delay: 2000 },
        { text: "הבנתי שזה לא סתם גז. זה גז אמוניה. ולא קצת אמוניה, אלא המון אמוניה. השמועות אומרות שזו התקפת סייבר על ישראל...", sender: "אנונימוס 2", delay: 3000 },
        { text: "רגע רגע. אבל באתר של משרד הבריאות כתוב שהדליפה הייתה קטנה, והמצב בשליטה. 🤓", sender: "אני", delay: 4000 },
        { text: "אוי לא, כתוב באינטרנט שאמוניה פוגעת בזיכרון ויכולה לגרום להזיות. אני חושב שאני רואה פיל ורוד רוכב על תרנגולת.... רגע, מה אמרתי עכשיו? 🐔🐓🐔", sender: "אנונימוס 3", delay: 5000 },
        { text: "באמת? פיל ורוד? אף פעם לא ראיתי פיל ורוד. הוא תוקפני?", sender: "אנונימוס 1", delay: 6000 },
        { text: "אתה צודק, יש שמועות שבתוך הגז נמצא חומר שנכנס למוח וגורם להזיות. אני רואה פיל ורוד פוקסיה...", sender: "אנונימוס 2", delay: 7000 },
        { text: "חברים, אני עוברת שוב על כל האתרים. משרד הבריאות בדק והוציא הודעה ברורה שהמצב בשליטה! ", sender: "אני", delay: 8000 },
        { text: "אז לא נושמים או כן? מותר לצאת החוצה? 😷😷😷😷😷😷", sender: "אנונימוס 3", delay: 9000 },
        { text: "לצאת החוצה? אתה משוגע? מדברים על זה שהולכים לפנות את כל תושבי מרכז הארץ לכיוון דרום, משם כנראה יצאו הפלגות לכיוון איטליה. ", sender: "אנונימוס 2", delay: 10000 },
        { text: "איטליה? מגניב. אני חולה על פיצה🍕. ", sender: "אנונימוס 1", delay: 11000 },
        { text: "רק שתדעו – סבתא של שכן של דוד שלי אמרה שיש לה בן במודיעין, והוא אמר שזו רק ההתחלה.", sender: "אנונימוס 2", delay: 12000 },
        { text: "די כבר! בוא נבדוק רק באתרים אמינים כמו ynet או משרד הבריאות. וחבר'ה – תשתו מים ואל תיבהלו.💦🙏🏽", sender: "אני", delay: 13000 },
        { text: "מים עוזרים לאמוניה? ", sender: "אנונימוס 1", delay: 14000 },
        { text: "טוב. אני הולך לנשום מתחת לשמיכה. אם מפנים אותי לבית חולים, תגידו להם שלא יזריקו לי פנצילין, כי אני אלרגי לפנצילין, מבטיחים?", sender: "אנונימוס 3", delay: 15000 }
    ];

    let messageIndex = 0;
    let anon2MessagesCount = 0;
    let anon2MessagesRemoved = 0;

    function renderNextMessage() {
        if (messageIndex < messages.length) {
            const msg = messages[messageIndex];
            const messageContainer = document.createElement('div');
            messageContainer.classList.add('message-container');

            if (msg.sender === "אני") {
                messageContainer.classList.add('me');
            } else {
                messageContainer.classList.add('other');
            }

            const senderNameElement = document.createElement('div');
            senderNameElement.classList.add('sender-name');
            senderNameElement.textContent = msg.sender;
            messageContainer.appendChild(senderNameElement);

            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            if (msg.sender === "אני") {
                messageElement.classList.add('me');
            } else {
                messageElement.classList.add('other');
            }

            messageElement.textContent = msg.text;
            messageContainer.appendChild(messageElement);

            if (msg.sender === "אנונימוס 2") {
                messageContainer.dataset.sender = "אנונימוס 2";
                anon2MessagesCount++;
                messageContainer.addEventListener('click', function() {
                    if (!this.classList.contains('removing')) {
                        this.classList.add('removing');
                        anon2MessagesRemoved++;
                        setTimeout(() => {
                            this.remove();
                            checkAllAnon2MessagesRemoved();
                        }, 500);
                    }
                });
            }

            chatArea.appendChild(messageContainer);
            chatArea.scrollTop = chatArea.scrollHeight; 
            
            setTimeout(() => {
                messageContainer.classList.add('visible');
            }, 50); 

            messageIndex++;
            if (messageIndex < messages.length) {
                const timeToNextMessage = messages[messageIndex].delay - messages[messageIndex - 1].delay;
                setTimeout(renderNextMessage, timeToNextMessage);
            }
        }
    }

    function checkAllAnon2MessagesRemoved() {
        if (anon2MessagesRemoved === anon2MessagesCount) {
            const successMessage = document.createElement('div');
            successMessage.classList.add('success-message');
            successMessage.textContent = 'כל הכבוד האקרים! עכשיו השיחה חזרה להיות אמינה. הקוד להמשך הוא 245';
            chatArea.appendChild(successMessage);
            chatArea.scrollTop = chatArea.scrollHeight;
        }
    }

    renderNextMessage();
});