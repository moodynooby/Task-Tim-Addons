           // Get all tab buttons and content
           const tabButtons = document.querySelectorAll('.dock button');
           const tabContents = document.querySelectorAll('.tab-content');
           
           // Add click event to each tab button
           tabButtons.forEach(button => {
               button.addEventListener('click', () => {
                   // Remove active class from all buttons and contents
                   tabButtons.forEach(btn => btn.classList.remove('dock-active'));
                   tabContents.forEach(content => content.classList.remove('active-tab'));
                   
                   // Add active class to clicked button
                   button.classList.add('dock-active');
                   
                   // Get the corresponding content id and activate it
                   const contentId = button.id.replace('-tab', '-content');
                   document.getElementById(contentId).classList.add('active-tab');
               });
           });