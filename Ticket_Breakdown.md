# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. Generate a customID.
    #Acceptance Criteria                                                        #Time/Effort Estimates
    1. The Id should be unique to each Agent and corresponding Facility         1. 1 day
       (Composite Key)
    2. The Shifts timings should not overlap for an agent.                      2. 2 days
    3. The Agent should be working with atmost 1 Facility during that shift     3. 2 days

    #Implementation Details
    Alter the Agent table and add the composite key corresponding to the Facility, i.e, F1A1, F1A2. 
    Alter the Shift table and add the same correspinding key stating which Agent is working with the Facility at that duration of shift.
    Insert a Stored Procedure which will have an intersaction of the three tables providing the  value of an Agent's not having an overlapping shifts for the facilities.

2. Generate the Report
    #Acceptance Criteria
   1. Report should be in pdf format
   2. Report should have an histogram to depicate the data.
   3. Should be able to generate the report on a custom time range.
   4. No other Facilty can access/download the reports of other facilties.

   #Time/Effort Estimates
   5 Days

   #Implemenation Details.
   Have an authentication mechanism maybe  AWS Cognito or S3 + AWS STS Assume Role, so that the report is accessiable to the particular facility.
   Have an 3rd party package to convert the data for us in pdf format.
   Add the time range in the UI and send it back to the backend which will hence send the details to DB to fetch the report for that duration.

    

