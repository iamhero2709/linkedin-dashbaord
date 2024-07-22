var options = {
    chart: {
      type: 'bar'
    },
    series: [{
      name: 'sales',
      data: [30,40,45,50,49,60,70,91,125]
    }],
    xaxis: {
      categories: ['week1','week2','week3','week4','week5','week6','week7','week8','week9']
    }
  }
  
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

 document.addEventListener('DOMContentLoaded', () => {
    // Dummy data
    const metrics = {
        linkedinActivity: {
            commentsPerWeek: 250,
            changePercentage: '+70%',
            followUpChange: '-10%'
        },
        topInteractedLeads: [
            { name: 'Alfredo', postCount: 2 },
            { name: 'Claudia', postCount: 2 },
            { name: 'Cahaya', postCount: 4 }
        ],
        hashtags: [
            { hashtag: '#H&M', posts: 'XXX', followers: 'XXX', trendChange: '+70% Than Last Week' },
            { hashtag: '#H&M', posts: 'XXX', followers: 'XXX', trendChange: '-70% Than Last Week' },
            { hashtag: '#H&M', posts: 'XXX', followers: 'XXX', trendChange: '+70% Than Last Week' }
        ],
        activityStats: [
            { week: 'Week 1', count: 8 },
            { week: 'Week 2', count: 10 },
            { week: 'Week 3', count: 15 },
            { week: 'Week 4', count: 12 }
        ],
        dailyActivity: [5, 8, 12, 20, 15, 22, 30],
        engagementMetrics: {
            posts: [3, 4, 5, 7, 6, 10, 12],
            comments: [15, 20, 25, 30, 25, 35, 40]
        }
    };

    // Display LinkedIn Activity Metrics
    document.querySelector('#comment').textContent = metrics.linkedinActivity.commentsPerWeek;
    document.querySelector('#linkedin-activty p').textContent = 'comments/week';
    document.querySelector('#linkedin-activty div:nth-of-type(2) h1').textContent = metrics.linkedinActivity.changePercentage;
    document.querySelector('#linkedin-activty div:nth-of-type(2) p').textContent = 'Than last week';
    document.querySelector('#follow-upchange').textContent = metrics.linkedinActivity.followUpChange;

    // Display Top Interacted Leads
    const topLeadsContainer = document.getElementById('profile-part');
    metrics.topInteractedLeads.forEach(lead => {
        const profileDiv = document.createElement('div');
        profileDiv.id = 'profile';
        profileDiv.innerHTML = `
            <img src="./Images/jurica-koletic-7YVZYZeITc8-unsplash.jpg" alt="">
            <p>${lead.name}</p>
        `;
        topLeadsContainer.appendChild(profileDiv);
    });

    // Display Hashtags
    const hashtagsContainer = document.querySelector('#hashatag');
    metrics.hashtags.forEach(tag => {
        const tagElement = document.createElement('h4');
        tagElement.textContent = `${tag.hashtag} - ${tag.trendChange}`;
        hashtagsContainer.appendChild(tagElement);
    });

    

    // Add Analytics Section Functionality
    const analyticsButton = document.getElementById('analytics-button');
    const mainContainer = document.querySelector('.main-container');
    const analyticsSection = document.getElementById('analytics-section');

    analyticsButton.addEventListener('click', () => {
        mainContainer.style.display = 'none';
        analyticsSection.style.display = 'block';

        renderActivityChart();
        renderEngagementChart();
    });

    function renderActivityChart() {
        const options = {
            chart: {
                type: 'bar',
                height: 350
            },
            series: [{
                name: 'Activity',
                data: metrics.dailyActivity
            }],
            xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            title: {
                text: 'Daily Activity'
            }
        };

        const chart = new ApexCharts(document.querySelector("#activity-chart"), options);
        chart.render();
    }

    function renderEngagementChart() {
        const options = {
            chart: {
                type: 'line',
                height: 350
            },
            series: [{
                name: 'Posts',
                data: metrics.engagementMetrics.posts
            }, {
                name: 'Comments',
                data: metrics.engagementMetrics.comments
            }],
            xaxis: {
                categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
            },
            title: {
                text: 'Engagement Metrics'
            }
        };

        const chart = new ApexCharts(document.querySelector("#engagement-chart"), options);
        chart.render();
    }
});


//sign out button and // help buutton

document.getElementById('signOutButton').addEventListener('click', () => {
    window.location.href = 'signout.html'; // Redirect to the sign-out page
});
document.getElementById('HelpandSupport').addEventListener('click', () => {
    window.location.href = 'help.html'; // Redirect to the sign-out page
});

//serach functionality 

    const searchInput = document.getElementById('searchInput');

    searchInput.addEventListener('input', function(event) {
        const query = event.target.value;
        performSearch(query);
    });

    function performSearch(query) {
        // Placeholder for search functionality
        // You can add your search logic here, e.g., filter hashtags from a list
        console.log('Searching for:', query);
        // Example: Update search results dynamically
        updateSearchResults(query);
    }

    function updateSearchResults(query) {
        // Placeholder for updating search results
        // Example: Display the search query in the console
        console.log('Displaying search results for:', query);
    }

