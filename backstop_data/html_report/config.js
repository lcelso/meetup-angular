report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_button_0_html_0_phone.png",
        "test": "../bitmaps_test/20180226-183631/backstop_default_button_0_html_0_phone.png",
        "selector": "html",
        "fileName": "backstop_default_button_0_html_0_phone.png",
        "label": "button",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -218,
            "height": -342
          },
          "misMatchPercentage": "39.84",
          "analysisTime": 81
        },
        "diffImage": "../bitmaps_test/20180226-183631/failed_diff_backstop_default_button_0_html_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/backstop_default_button_0_html_1_tablet.png",
        "test": "../bitmaps_test/20180226-183631/backstop_default_button_0_html_1_tablet.png",
        "selector": "html",
        "fileName": "backstop_default_button_0_html_1_tablet.png",
        "label": "button",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -199
          },
          "misMatchPercentage": "85.02",
          "analysisTime": 106
        },
        "diffImage": "../bitmaps_test/20180226-183631/failed_diff_backstop_default_button_0_html_1_tablet.png"
      },
      "status": "fail"
    }
  ]
});