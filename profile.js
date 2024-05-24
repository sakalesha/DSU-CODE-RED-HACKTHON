document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profileForm');
    const contributionsLog = document.getElementById('contributionsLog');

    // Placeholder for user profile and contributions
    const userProfile = {
        name: '',
        location: '',
        interests: '',
    };

    // Function to populate profile form with user data
    const populateProfile = () => {
        document.getElementById('name').value = userProfile.name;
        document.getElementById('location').value = userProfile.location;
        document.getElementById('interests').value = userProfile.interests;
        contributionsLog.innerHTML = '';
        userProfile.contributions.forEach(contribution => {
            const li = document.createElement('li');
            li.textContent = contribution;
            contributionsLog.appendChild(li);
        });
    };

    // Populate profile on page load
    populateProfile();

    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        userProfile.name = document.getElementById('name').value;
        userProfile.location = document.getElementById('location').value;
        userProfile.interests = document.getElementById('interests').value;

        // Simulate saving profile data
        console.log('Profile updated:', userProfile);

        alert('Profile updated successfully!');
    });
});
