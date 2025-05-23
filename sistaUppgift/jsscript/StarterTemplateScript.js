    // Fetch and load the header template
    fetch('HeaderTemplate.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load template');
            }
            return response.text();
        })
        .then(template => {
            // Insert the template into the placeholder
            document.getElementById('HeaderContainer').innerHTML = template;
        })
        .catch(error => {
            console.error('Error loading template:', error);
        });

    // Fetch and load the footer template
    fetch('FooterTemplate.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load template');
            }
            return response.text();
        })
        .then(template => {
            // Insert the template into the placeholder
            document.getElementById('footerContainer').innerHTML = template;
        })
        .catch(error => {
            console.error('Error loading template:', error);
        });
