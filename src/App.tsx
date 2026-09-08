import { useState, useEffect } from 'react';
import { Branch, workingDays, timetable, WorkingDay } from './data';
import { cn, formatTime, getLocalDateString, timeToMins } from './lib/utils';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';

const BRANCH_NAMES: Record<Branch, string> = {
  ME: 'Mechanical (ME)',
  CV: 'Civil (CV)',
  BM: 'Bio-medical (BM)'
};

export default function App() {
  const [selectedBranch, setSelectedBranch] = useState<Branch | null>(null);
  
  // Real-time clock state
  const [now, setNow] = useState(new Date());

  // Date selection state
  const [isTodayMode, setIsTodayMode] = useState(true);
  const [selectedDateStr, setSelectedDateStr] = useState<string>(getLocalDateString(now));

  useEffect(() => {
    const saved = localStorage.getItem('selectedBranch') as Branch | null;
    if (saved) setSelectedBranch(saved);
  }, []);

  useEffect(() => {
    if (selectedBranch) {
      localStorage.setItem('selectedBranch', selectedBranch);
    }
  }, [selectedBranch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 10000); // update every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const displayedDateStr = isTodayMode ? getLocalDateString(now) : selectedDateStr;
  const isViewingToday = displayedDateStr === getLocalDateString(now);

  const handleBranchSelect = (branch: Branch) => {
    setSelectedBranch(branch);
  };

  const handleBack = () => {
    setSelectedBranch(null);
  };

  if (!selectedBranch) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 relative">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 bg-blue-600 text-white text-center">
            <div className="flex justify-center mb-4">
              <img src="https://i.ibb.co/sp3JzMpn/logo.jpg" alt="Golaghat Polytechnic Logo" className="w-24 h-24 object-contain rounded-full shadow-md bg-white p-1" referrerPolicy="no-referrer" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-wider leading-tight drop-shadow-md">GOLAGHAT POLYTECHNIC, FURKATING</h1>
            <p className="text-blue-100 text-base mt-2 font-medium">Class Routine - 1st Semester</p>
          </div>
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-bold text-slate-800 text-center mb-6">Select Your Branch</h2>
            {(Object.keys(BRANCH_NAMES) as Branch[]).map((branch) => (
              <button
                key={branch}
                onClick={() => handleBranchSelect(branch)}
                className="group w-full p-5 rounded-2xl border-2 border-slate-100 hover:border-blue-500 hover:shadow-md hover:bg-blue-50/50 transition-all text-left flex items-center justify-between bg-white"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-slate-800 group-hover:text-blue-900 transition-colors">{BRANCH_NAMES[branch]}</span>
                  <span className="text-sm font-medium text-slate-500">1st Semester Routine</span>
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-100 group-hover:text-blue-700 text-slate-400 transition-colors font-bold text-lg">
                  {branch}
                </div>
              </button>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-6 left-0 w-full text-center text-xs text-slate-500">
          Developed by <a href="https://elevixstudio.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Elevix Studio</a>
        </div>
      </div>
    );
  }

  const workingDayData = workingDays.find(d => d.date === displayedDateStr) || {
    date: displayedDateStr,
    working_day: null,
    status: 'holiday',
    holiday_reason: 'Date out of bounds'
  } as WorkingDay;

  const classesForDay = (workingDayData.status === 'working' && workingDayData.working_day)
    ? timetable.filter(c => c.branch === selectedBranch && c.working_day === workingDayData.working_day).sort((a, b) => timeToMins(a.start_time) - timeToMins(b.start_time))
    : [];

  let currentClassUI = null;
  let nextClassUI = null;

  if (isViewingToday && workingDayData.status === 'working') {
    const currentMins = timeToMins(`${now.getHours()}:${now.getMinutes()}`);
    
    if (currentMins < 540) {
      currentClassUI = { type: 'message', message: 'Classes Start at 9:00 AM' };
      nextClassUI = classesForDay.length > 0 ? { type: 'class', data: classesForDay[0] } : null;
    } else if (currentMins >= 930) {
      currentClassUI = { type: 'message', message: 'Classes Ended' };
      nextClassUI = null;
    } else if (currentMins >= 780 && currentMins < 810) {
      currentClassUI = { type: 'break' };
      const next = classesForDay.find(c => timeToMins(c.start_time) >= 810);
      nextClassUI = next ? { type: 'class', data: next } : null;
    } else {
      for (let i = 0; i < classesForDay.length; i++) {
        const c = classesForDay[i];
        const startMins = timeToMins(c.start_time);
        const endMins = timeToMins(c.end_time);
        
        if (currentMins >= startMins && currentMins < endMins) {
          currentClassUI = { type: 'class', data: c };
          if (endMins === 780) {
            nextClassUI = { type: 'break' };
          } else {
            nextClassUI = i + 1 < classesForDay.length ? { type: 'class', data: classesForDay[i+1] } : null;
          }
          break;
        }
      }
    }
    
    if (!currentClassUI && currentMins >= 540 && currentMins < 930) {
       // fallback if a gap exists for some reason
       currentClassUI = { type: 'message', message: 'No current class' };
    }
  }

  const formatDisplayDate = (dateStr: string) => {
    const d = new Date(dateStr);
    return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:max-w-md md:mx-auto md:shadow-2xl relative">
      <header className="bg-blue-600 text-white p-4 sticky top-0 z-10 shadow-md">
        <div className="flex flex-col items-center justify-center mb-4 space-y-2">
          <img src="https://i.ibb.co/sp3JzMpn/logo.jpg" alt="Golaghat Polytechnic Logo" className="w-16 h-16 object-contain rounded-full shadow-sm bg-white p-1" referrerPolicy="no-referrer" />
          <div className="text-center text-lg sm:text-xl font-extrabold text-white tracking-widest uppercase drop-shadow-sm leading-tight">
            GOLAGHAT POLYTECHNIC, FURKATING
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <button onClick={handleBack} className="flex items-center text-blue-100 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5 mr-1" />
            Back
          </button>
          <span className="font-semibold">{BRANCH_NAMES[selectedBranch]}</span>
        </div>
        
        <div className="flex flex-col items-center">
          <div className="text-sm text-blue-200 uppercase tracking-wider font-semibold">
            {isViewingToday ? 'Today' : 'Viewing Date'}
          </div>
          <div className="text-xl font-bold mt-1">
            {formatDisplayDate(displayedDateStr)}
          </div>
          <div className="mt-2 text-blue-100 font-medium">
            {workingDayData.status === 'working' ? `Working Day: ${workingDayData.working_day}` : 'Holiday'}
          </div>
        </div>
      </header>

      <div className="flex items-center justify-between p-4 bg-white border-b shadow-sm">
        <input 
          type="date" 
          className="p-2 border rounded-md text-sm text-slate-700 bg-slate-50 focus:ring-2 focus:ring-blue-500 outline-none"
          value={displayedDateStr}
          min="2026-08-05"
          max="2026-11-25"
          onChange={(e) => {
            if (e.target.value) {
              setSelectedDateStr(e.target.value);
              setIsTodayMode(e.target.value === getLocalDateString(now));
            }
          }}
        />
        <button 
          onClick={() => {
            setIsTodayMode(true);
            setSelectedDateStr(getLocalDateString(now));
          }}
          className={cn(
            "px-4 py-2 rounded-md text-sm font-semibold transition-colors",
            isTodayMode ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          Today
        </button>
      </div>

      <main className="flex-1 p-4 space-y-6 overflow-y-auto pb-8">
        {workingDayData.status === 'holiday' ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-20 h-20 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-800 mb-2">Holiday Off</h2>
            <p className="text-lg text-slate-600">{workingDayData.holiday_reason}</p>
          </div>
        ) : (
          <>
            {isViewingToday && (
              <div className="space-y-4">
                {/* Current Class Card */}
                <div className="bg-white border-2 border-blue-500 rounded-3xl p-6 shadow-lg shadow-blue-500/10 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                  <h3 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3 flex items-center">
                    <span className="relative flex h-3 w-3 mr-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                    </span>
                    Live Now
                  </h3>
                  
                  {currentClassUI?.type === 'class' && currentClassUI.data ? (
                    <div>
                      <div className="text-3xl font-extrabold text-slate-900 mb-2 leading-tight">{currentClassUI.data.subject}</div>
                      <div className="inline-flex items-center text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg font-semibold text-sm">
                        <Clock className="w-4 h-4 mr-1.5" />
                        {formatTime(currentClassUI.data.start_time)} – {formatTime(currentClassUI.data.end_time)}
                      </div>
                    </div>
                  ) : currentClassUI?.type === 'break' ? (
                    <div className="text-3xl font-extrabold text-slate-900 mb-2 tracking-widest">BREAK</div>
                  ) : currentClassUI?.type === 'message' ? (
                    <div className="text-2xl font-bold text-slate-800 mb-2">{currentClassUI.message}</div>
                  ) : null}
                </div>

                {/* Next Class Card */}
                <div className="bg-slate-50 border-2 border-slate-200 rounded-3xl p-6 shadow-sm">
                  <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3 flex items-center">
                    Coming Up Next
                  </h3>
                  
                  {nextClassUI?.type === 'class' && nextClassUI.data ? (
                    <div>
                      <div className="text-xl font-bold text-slate-800 mb-2">{nextClassUI.data.subject}</div>
                      <div className="inline-flex items-center text-slate-600 bg-slate-200/50 px-3 py-1.5 rounded-lg font-medium text-sm">
                        <Clock className="w-4 h-4 mr-1.5 text-slate-400" />
                        {formatTime(nextClassUI.data.start_time)} – {formatTime(nextClassUI.data.end_time)}
                      </div>
                    </div>
                  ) : nextClassUI?.type === 'break' ? (
                    <div className="text-xl font-bold text-slate-800 mb-1 tracking-widest">BREAK</div>
                  ) : (
                    <div className="text-lg font-medium text-slate-400">No More Classes Today</div>
                  )}
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-4 pb-2 border-b">
                {isViewingToday ? "Today's Classes" : "Classes for this date"}
              </h3>
              <div className="space-y-3">
                {classesForDay.map((c, i) => {
                  const endMins = timeToMins(c.end_time);
                  const isLastBeforeBreak = endMins === 780; // 12:00-13:00 class
                  
                  // Highlight logic
                  const currentMins = timeToMins(`${now.getHours()}:${now.getMinutes()}`);
                  const startMins = timeToMins(c.start_time);
                  const isCurrent = isViewingToday && currentMins >= startMins && currentMins < endMins;

                  return (
                    <div key={i} className="flex flex-col">
                      <div className={cn(
                        "flex p-5 rounded-2xl border-2 transition-all group",
                        isCurrent ? "bg-blue-50 border-blue-200 shadow-md ring-4 ring-blue-50" : "bg-white border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                      )}>
                        <div className="w-24 shrink-0 flex flex-col justify-center border-r-2 border-slate-100 pr-4 mr-4 group-hover:border-blue-200 transition-colors">
                          <span className={cn("text-base font-extrabold", isCurrent ? "text-blue-700" : "text-slate-800")}>
                            {formatTime(c.start_time)}
                          </span>
                          <span className="text-xs font-semibold text-slate-400 mt-1">
                            {formatTime(c.end_time)}
                          </span>
                        </div>
                        <div className="flex flex-col justify-center flex-1">
                          <span className={cn(
                            "font-bold text-lg leading-snug",
                            isCurrent ? "text-blue-900" : "text-slate-700"
                          )}>
                            {c.subject}
                          </span>
                        </div>
                      </div>
                      
                      {isLastBeforeBreak && (
                        <div className="my-4 flex items-center justify-center p-4 bg-slate-100/80 rounded-2xl border-2 border-slate-200 border-dashed">
                          <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">Break (1:00 PM – 1:30 PM)</span>
                        </div>
                      )}
                    </div>
                  );
                })}
                
                {classesForDay.length > 0 && (
                   <div className="mt-6 flex items-center justify-center p-4">
                     <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Classes Ended {formatTime('15:30')}</span>
                   </div>
                )}
              </div>
            </div>
          </>
        )}
      </main>

      <footer className="p-4 text-center text-xs text-slate-500 mt-auto border-t bg-slate-100/50">
        Developed by <a href="https://elevixstudio.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-semibold">Elevix Studio</a>
      </footer>
    </div>
  );
}
