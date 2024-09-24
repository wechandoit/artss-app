# Automated Robotic Tracheostomy Suctioning System (UI)

This repository contains the code and documentation for the user interface that works with the ARTSS prototype, a project that began in Johns Hopkins University's 601.496 Computer Integrated Surgery II (Teams) course.

### Design

- App.tsx: high level organization of application structure

  - Sidebar.tsx: static navigation for application pages
    page: string [representing the current page starting with '/name_page']
    onSelect?: (page: string) => void [updating the current page based on selection]
  - column flex

    - Header.tsx: static navigation for patients

      - Search.tsx: updates content.tsx based on input
      - Clock.tsx: static display of local time

    - Content.tsx: dynamic display based on user interaction
      route: string [representing the route to the current page]

- Search.tsx
  /search?q={input}

- Content.tsx

- Patient.tsx
  /patient?id={patient_id}
  id: number

  - SuctionStatus.tsx
    status: {
    line: string // Scheduled, Approved, Suctioning
    time: Date
    }
    onChange: (type: { line: string; time: Date }) => void
  - SuctionDistance.tsx
    dist: number
    onChange: (type: number) => void
  - TubeType.tsx
    type: string
    onChange: (type: string) => void
  - SuctionFreq.tsx
    freq: number
    onChange: (type: number) => void

- Patients.tsx

## Authors

- [Rena Bi]
