/**
 * Created by Administrator on 2016/7/27.
 */
$(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: true,
        anchors:['firstPage', 'secondPage'],
        navigation: false,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        scrollOverflowOptions: null,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,
        bigSectionsDestination: null,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        sectionsColor : ['#fff', '#fff'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
         afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });
});