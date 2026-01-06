"use client";
import { Check, Edit2, RefreshCw, Save, X, Lock } from "lucide-react";
import { useState } from "react";

interface ContentItemProps {
    item: any;
    index: number;
    toggleComplete: (i: number) => void;
    startEditing: (i: number, content: string) => void;
    regenerateSingle: (i: number) => void;
    saveEdit: (i: number, content: string) => void;
    isGenerating: boolean;
}

export const ContentCard = ({
    item,
    index,
    toggleComplete,
    startEditing,
    regenerateSingle,
    saveEdit,
    isGenerating,
}: ContentItemProps) => {
    const [editing, setEditing] = useState(false);
    const [editContent, setEditContent] = useState(item.idea);

    const handleSave = () => {
        saveEdit(index, editContent);
        setEditing(false);
    };

    // Disable editing/regenerating for completed items
    const isLocked = item.completed;

    return (
        <div
            className={`bg-white rounded-xl shadow-md p-6 transition-all ${item.completed ? "opacity-60" : ""
                }`}
        >
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4 flex-1">
                    <button
                        onClick={() => toggleComplete(index)}
                        className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${item.completed
                                ? "bg-green-500 border-green-500"
                                : "border-gray-300 hover:border-purple-500"
                            }`}
                    >
                        {item.completed && <Check className="w-4 h-4 text-white" />}
                    </button>

                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold text-lg text-gray-800">{item.day}</span>
                            <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium">
                                {item.platform}
                            </span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                                {item.contentType}
                            </span>
                            {isLocked && (
                                <span className="flex items-center gap-1 bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                                    <Lock className="w-3 h-3" />
                                    Locked
                                </span>
                            )}
                        </div>

                        {editing ? (
                            <div className="space-y-2">
                                <textarea
                                    value={editContent}
                                    onChange={(e) => setEditContent(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                    rows={3}
                                />
                                <div className="flex gap-2">
                                    <button
                                        onClick={handleSave}
                                        className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                                    >
                                        <Save className="w-3 h-3" /> Save
                                    </button>
                                    <button
                                        onClick={() => setEditing(false)}
                                        className="flex items-center gap-1 bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
                                    >
                                        <X className="w-3 h-3" /> Cancel
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p className="text-gray-700 font-medium mb-2">{item.idea}</p>
                                <p className="text-gray-600 text-sm italic">"{item.hook}"</p>
                            </>
                        )}
                    </div>
                </div>

                {!editing && (
                    <div className="flex gap-2">
                        <button
                            onClick={() => {
                                if (!isLocked) {
                                    setEditing(true);
                                    setEditContent(item.idea);
                                }
                            }}
                            disabled={isLocked}
                            className={`p-2 rounded-lg transition-colors ${isLocked
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-gray-100"
                                }`}
                            title={isLocked ? "Uncheck to edit" : "Edit"}
                        >
                            <Edit2 className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                            onClick={() => !isLocked && regenerateSingle(index)}
                            disabled={isGenerating || isLocked}
                            className={`p-2 rounded-lg transition-colors ${isLocked || isGenerating
                                    ? "opacity-40 cursor-not-allowed"
                                    : "hover:bg-gray-100"
                                }`}
                            title={isLocked ? "Uncheck to regenerate" : "Regenerate"}
                        >
                            <RefreshCw
                                className={`w-4 h-4 text-gray-600 ${isGenerating ? "animate-spin" : ""
                                    }`}
                            />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};