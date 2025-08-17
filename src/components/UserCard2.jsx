import React, { useState, useRef } from 'react'

const UserCard = ({user, onSwipe}) => {
    const {firstName,lastName,age,gender,about}=user;
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const [cardTransform, setCardTransform] = useState('');
    const cardRef = useRef(null);
    
    console.log(user)

    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        e.preventDefault();
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diffX = currentX - startX;
        setCurrentX(diffX);
        
        const rotation = diffX * 0.1;
        const opacity = Math.max(0.3, 1 - Math.abs(diffX) / 300);
        
        setCardTransform(`translateX(${diffX}px) rotate(${rotation}deg)`);
        cardRef.current.style.opacity = opacity;
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diffX = currentX - startX;
        setCurrentX(diffX);
        
        const rotation = diffX * 0.1;
        const opacity = Math.max(0.3, 1 - Math.abs(diffX) / 300);
        
        setCardTransform(`translateX(${diffX}px) rotate(${rotation}deg)`);
        cardRef.current.style.opacity = opacity;
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        const threshold = 100;
        
        if (Math.abs(currentX) > threshold) {
            const direction = currentX > 0 ? 'right' : 'left';
            const finalX = currentX > 0 ? 1000 : -1000;
            
            setCardTransform(`translateX(${finalX}px) rotate(${currentX > 0 ? 30 : -30}deg)`);
            cardRef.current.style.opacity = 0;
            cardRef.current.style.zIndex = 1; // Lower z-index when swiped
            
            setTimeout(() => {
                onSwipe(direction, user);
            }, 300);
        } else {
            // Snap back to center
            setCardTransform('');
            cardRef.current.style.opacity = 1;
        }
        
        setCurrentX(0);
    };

    const handleIgnore = () => {
        setCardTransform('translateX(-1000px) rotate(-30deg)');
        cardRef.current.style.opacity = 0;
        cardRef.current.style.zIndex = 1; // Lower z-index when swiped
        setTimeout(() => {
            onSwipe('left', user);
        }, 300);
    };

    const handleInterested = () => {
        setCardTransform('translateX(1000px) rotate(30deg)');
        cardRef.current.style.opacity = 0;
        cardRef.current.style.zIndex = 1; // Lower z-index when swiped
        setTimeout(() => {
            onSwipe('right', user);
        }, 300);
    };

    return (
        <div 
            ref={cardRef}
            className="card w-full max-w-md shadow-xl rounded-2xl cursor-grab active:cursor-grabbing select-none px-6 pt-8 pb-6 relative bg-gradient-to-br from-white via-blue-50 to-purple-100 border border-blue-100"
            style={{
                transform: cardTransform,
                transition: isDragging ? 'none' : 'all 0.3s cubic-bezier(.4,2,.3,1)',
                touchAction: 'none',
                minHeight: 420,
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
        >
            <div className="flex flex-col items-center mt-9">
                <div className="overflow-hidden rounded-full border-4 border-blue-200 shadow-md mb-4" style={{width: 120, height: 120, background: '#f3f4f6'}}>
                    <img
                        src={"https://th.bing.com/th?id=OIP.9vm7eDbnZS6Yy4ETUfEBAgHaGw&w=261&h=238&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"}
                        alt="Profile"
                        draggable={false}
                        className="object-cover w-full h-full"
                    />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-1 text-center">{firstName + " " + lastName}</h2>
                {age && gender && <p className="text-gray-500 mb-1 text-center">{age + " • " + gender}</p>}
                <p className="text-gray-600 mb-4 text-center">{about}</p>

            </div>
        </div>
    )
}

export default UserCard