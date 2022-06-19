// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.8;


contract EventFactory {

    error NotTicketOwner();
    error NotRegistered();
    error CheckedIn();

    struct EventTracker {
        bool ticketTransferStatus;
        bool eventCheckInStatus;
        uint32 eventTag;
        uint48 datePurchased;
        address participantAddress;
        uint48 ticketTransferDate;
    }

    struct AllEvents {
        address creatorAddress;
        uint128 ticketAmount;
        uint128 maxParticipant;
    }

    uint256 public index;

    struct EventStatus {
        uint32 totalParticipants;
    }

    mapping(uint256 => AllEvents) allEventCreator;
    mapping(uint256 => EventStatus) eventStatus;
    mapping(uint256 => mapping(uint256=> EventTracker)) eventTracker;

    event EventCheckIn(uint256 _eventId, address participantAddress, bool eventCheckInStatus);
    event PurchasedTicket(uint256 eventId, address participantAddress, uint32 currentTag);
    event TransferTicketOwnership(uint256 eventId, address participantAddress, uint32 eventTag);

    function buyTicket(uint256 _eventId, address _address) public{
        EventStatus storage _event = eventStatus[_eventId];
        uint32 _currentTag = _event.totalParticipants + 1;
        _event.totalParticipants = _currentTag;
        EventTracker storage i_ = eventTracker[_eventId][_currentTag];
        i_.datePurchased = uint40(block.timestamp);
        i_.participantAddress = _address;
        ++i_.eventTag;
        emit PurchasedTicket(_eventId, _address, _currentTag);
    }

    function checkInEventAttendees(uint256 _eventId, address _address, uint32 _eventTag) public {
        EventTracker storage i_ = eventTracker[_eventId][_eventTag];
        if(i_.participantAddress != _address) revert NotRegistered();
        if(i_.eventCheckInStatus == true) revert CheckedIn();
        i_.eventCheckInStatus = true;
        emit EventCheckIn(_eventId, _address, true);
    }

    function transferTicketOwnership(uint256 _eventId, address _ownerAddress, address _newAddress, uint32 _eventTag) public {
        EventTracker storage i_ = eventTracker[_eventId][_eventTag];
        if(_ownerAddress != i_.participantAddress) revert NotTicketOwner();
        i_.participantAddress = _newAddress;
        i_.ticketTransferDate = uint40(block.timestamp);
        emit TransferTicketOwnership(_eventId, _newAddress, _eventTag);
    }

    function fetchEventParticipants(uint256 _eventId, uint256 _participants) public view returns(EventTracker[] memory addresses) {
        addresses = new EventTracker[](_participants);
        for(uint256 i=0; i < _participants; i++){
            EventTracker storage i_ = eventTracker[_eventId][i];
            EventTracker memory c = addresses[i];
            c.datePurchased = i_.datePurchased;
            c.participantAddress = i_.participantAddress;
        }
    }

    function createEvent(uint128 maxNumberOfParticipants, uint128 _amount) public {
        AllEvents storage all = allEventCreator[index];
        all.creatorAddress = msg.sender;
        all.maxParticipant = maxNumberOfParticipants;
        all.ticketAmount = _amount;
        index = index + 1;
    }

    // function checkParticipantStatus(uint256 _evenTag, uint256 _eventId) public view returns(bool) {
    //        EventTracker storage i_ = eventTracker[_eventId][_eventTag];
    // }
}