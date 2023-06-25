---------In this posts App I used Concepts ----------------

- chakra ui
- useEffect Hook
- useState Hook

--------And Components Explanation---

Inside posts folder we have three components
 1. Navbar -- just for Title of Application
 2. Posts -- In this components all the logics. Basically this component is responsible for render the data on  display.
 3. card -- this components is used for data reusability. 

------------------ posts API --------------
Link -- https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0

This api is calling 10 times for 11 different pages and Each page will be add in bottom of previous page.